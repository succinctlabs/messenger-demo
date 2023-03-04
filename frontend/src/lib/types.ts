export enum ExecutionStatus {
  WAITING_SLOT_FINALITY = "WAITING_SLOT_FINALITY",
  WAITING_LIGHT_CLIENT_UPDATE = "WAITING_LIGHT_CLIENT_UPDATE",
  WAITING_SAFETY_DELAY = "WAITING_SAFETY_DELAY",
  WAITING_RELAYER = "WAITING_RELAYER",
  EXECUTED_SUCCESS = "EXECUTED_SUCCESS",
  EXECUTED_FAIL = "EXECUTED_FAIL", // relayed but call handleTelepathy reverted
  UNKNOWN = "UNKNOWN",
  // TODO: for messages that are WAITING_RELAYER, we can check if the target chain is frozen with ethers
  // TARGET_CHAIN_FROZEN = "TARGET_CHAIN_FROZEN",
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
