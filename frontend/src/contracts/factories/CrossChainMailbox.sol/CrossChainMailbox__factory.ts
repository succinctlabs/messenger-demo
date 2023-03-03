/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CrossChainMailbox,
  CrossChainMailboxInterface,
} from "../../CrossChainMailbox.sol/CrossChainMailbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_telepathyReceiever",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotFromTelepathyReceiever",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "sourceChain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MessageReceived",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_sourceChainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_senderAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "handleTelepathy",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "uint32",
        name: "sourceChain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messagesLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161069f38038061069f83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61060c806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630d80fefd146100465780633bdc60d614610071578063e11dba541461009d575b600080fd5b6100596100543660046102da565b6100ae565b60405161006893929190610339565b60405180910390f35b61008461007f366004610388565b61017f565b6040516001600160e01b03199091168152602001610068565b600154604051908152602001610068565b600181815481106100be57600080fd5b60009182526020909120600290910201805460018201805463ffffffff831694506401000000009092046001600160a01b031692916100fc90610473565b80601f016020809104026020016040519081016040528092919081815260200182805461012890610473565b80156101755780601f1061014a57610100808354040283529160200191610175565b820191906000526020600020905b81548152906001019060200180831161015857829003601f168201915b5050505050905083565b600080546001600160a01b031633146101b157604051631ee80c4f60e21b815233600482015260240160405180910390fd5b6101bc8484846101cc565b50631dee306b60e11b9392505050565b6040805160608101825263ffffffff80861682526001600160a01b0380861660208401908152938301858152600180548082018255600091909152845160029091027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810180549751909416640100000000026001600160c01b0319909716919094161794909417815592519192917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79091019061028a90826104fc565b505050816001600160a01b03168363ffffffff167fcee7c9589f34e9a9367c67f5abbdd8970c49bf380828940c266d29187cfbc2fb836040516102cd91906105bc565b60405180910390a3505050565b6000602082840312156102ec57600080fd5b5035919050565b6000815180845260005b81811015610319576020818501810151868301820152016102fd565b506000602082860101526020601f19601f83011685010191505092915050565b63ffffffff841681526001600160a01b0383166020820152606060408201819052600090610369908301846102f3565b95945050505050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561039d57600080fd5b833563ffffffff811681146103b157600080fd5b925060208401356001600160a01b03811681146103cd57600080fd5b9150604084013567ffffffffffffffff808211156103ea57600080fd5b818601915086601f8301126103fe57600080fd5b81358181111561041057610410610372565b604051601f8201601f19908116603f0116810190838211818310171561043857610438610372565b8160405282815289602084870101111561045157600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b600181811c9082168061048757607f821691505b6020821081036104a757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156104f757600081815260208120601f850160051c810160208610156104d45750805b601f850160051c820191505b818110156104f3578281556001016104e0565b5050505b505050565b815167ffffffffffffffff81111561051657610516610372565b61052a816105248454610473565b846104ad565b602080601f83116001811461055f57600084156105475750858301515b600019600386901b1c1916600185901b1785556104f3565b600085815260208120601f198616915b8281101561058e5788860151825594840194600190910190840161056f565b50858210156105ac5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020815260006105cf60208301846102f3565b939250505056fea26469706673582212202e97d870d7c7e9b8356a45fc2cc4dd5598c20bd1c0fffcd3b3080cc2b525911464736f6c63430008100033";

type CrossChainMailboxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainMailboxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainMailbox__factory extends ContractFactory {
  constructor(...args: CrossChainMailboxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _telepathyReceiever: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrossChainMailbox> {
    return super.deploy(
      _telepathyReceiever,
      overrides || {}
    ) as Promise<CrossChainMailbox>;
  }
  override getDeployTransaction(
    _telepathyReceiever: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_telepathyReceiever, overrides || {});
  }
  override attach(address: string): CrossChainMailbox {
    return super.attach(address) as CrossChainMailbox;
  }
  override connect(signer: Signer): CrossChainMailbox__factory {
    return super.connect(signer) as CrossChainMailbox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainMailboxInterface {
    return new utils.Interface(_abi) as CrossChainMailboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainMailbox {
    return new Contract(address, _abi, signerOrProvider) as CrossChainMailbox;
  }
}
