/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  mint_percent: number;
  owner?: string | null;
}
export type ExecuteMsg = {
  create_collection: CollectionParams;
} | {
  mint_n_f_t: MintParams;
} | {
  withdraw: WithdrawParams;
} | {
  update_config: Config;
} | {
  update_mint_fee: UpdateMintFeeParams;
};
export type Addr = string;
export interface CollectionParams {
  code_id: number;
  mint_fee: number;
  name: string;
  symbol: string;
}
export interface MintParams {
  code_id: number;
  collection_address: Addr;
  collection_creator: Addr;
  collection_name: string;
  owner: string;
  token_uri: string;
}
export interface WithdrawParams {
  withdraw_address: Addr;
  withdraw_amount: number;
}
export interface Config {
  mint_percent: number;
  owner: Addr;
}
export interface UpdateMintFeeParams {
  collection_name: string;
  mint_fee: number;
}
export type QueryMsg = {
  config: {};
} | {
  token_index: {};
} | {
  creator_collections: {
    collection_name: string;
    creator: Addr;
  };
};
export interface ConfigResponse {
  mint_percent: number;
  owner: Addr;
}
export interface CollectionInfoResponse {
  collection_address?: Addr | null;
  mint_fee: number;
  name: string;
  symbol: string;
}
export type Uint64 = number;