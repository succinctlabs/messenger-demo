pragma solidity ^0.8.16;

import "forge-std/Vm.sol";
import "forge-std/console.sol";
import "forge-std/Test.sol";

import {CrossChainMailboxSender, CrossChainMailboxReceiver, Message} from "contracts/src/CrossChainMailbox.sol";
import {MockTelepathy} from "telepathy/amb/mocks/MockTelepathy.sol";

contract MailboxTest is Test {
    uint256 constant FEE = 0.01 ether;
    uint32 constant SOURCE_CHAIN_ID = 1;
    uint32 constant TARGET_CHAIN_ID = 100;
    bytes constant MESSAGE = "Hello, world!";

    CrossChainMailboxSender mailboxSender;
    CrossChainMailboxReceiver mailboxReceiver;
    MockTelepathy source;
    MockTelepathy target;
    address owner;
    address alice;

    event MessageReceived(uint32 indexed sourceChain, address indexed sender, string message);

    function setUp() public {
        source = new MockTelepathy(SOURCE_CHAIN_ID);
        target = new MockTelepathy(TARGET_CHAIN_ID);
        source.addTelepathyReceiver(TARGET_CHAIN_ID, target);

        owner = payable(makeAddr("owner"));
        vm.prank(owner);
        mailboxSender = new CrossChainMailboxSender(FEE, address(source));
        mailboxReceiver = new CrossChainMailboxReceiver(address(target));

        alice = payable(makeAddr("alice"));
        deal(alice, 1 ether);
    }

    function test_Send() public {
        assertEq(mailboxReceiver.messagesLength(), 0);

        vm.prank(alice);
        mailboxSender.sendMail{value: FEE}(TARGET_CHAIN_ID, address(mailboxReceiver), MESSAGE);

        vm.expectEmit(true, true, true, true);
        emit MessageReceived(SOURCE_CHAIN_ID, address(mailboxSender), string(abi.encode(MESSAGE)));
        source.executeNextMessage();

        assertEq(mailboxReceiver.messagesLength(), 1);
        (uint32 sourceChain, address sender, string memory message) = mailboxReceiver.messages(0);
        assertEq(sourceChain, SOURCE_CHAIN_ID);
        assertEq(sender, address(mailboxSender));
        assertEq(message, string(abi.encode(MESSAGE)));
        assertEq(address(mailboxSender).balance, FEE);
    }

    function test_RevertSend_WhenFeeTooLow() public {
        assertEq(mailboxReceiver.messagesLength(), 0);

        vm.prank(alice);
        vm.expectRevert();
        mailboxSender.sendMail{value: FEE - 1}(TARGET_CHAIN_ID, address(mailboxReceiver), MESSAGE);
    }

    function test_collectFees() public {
        assertEq(mailboxReceiver.messagesLength(), 0);

        vm.prank(alice);
        mailboxSender.sendMail{value: FEE}(TARGET_CHAIN_ID, address(mailboxReceiver), MESSAGE);

        vm.expectEmit(true, true, true, true);
        emit MessageReceived(SOURCE_CHAIN_ID, address(mailboxSender), string(abi.encode(MESSAGE)));
        source.executeNextMessage();

        assertEq(mailboxReceiver.messagesLength(), 1);
        (uint32 sourceChain, address sender, string memory message) = mailboxReceiver.messages(0);
        assertEq(sourceChain, SOURCE_CHAIN_ID);
        assertEq(sender, address(mailboxSender));
        assertEq(message, string(abi.encode(MESSAGE)));
        assertEq(address(mailboxSender).balance, FEE);

        vm.prank(owner);
        mailboxSender.claimFees();
        assertEq(address(mailboxSender).balance, 0);
    }
}
