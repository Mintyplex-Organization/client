/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, CollectionParams, MintParams, QueryMsg, Addr, ConfigResponse, Config } from "./Mintyplex.types";
export interface MintyplexMsg {
  contractAddress: string;
  sender: string;
  createCollection: ({
    codeId,
    name,
    symbol
  }: {
    codeId: number;
    name: string;
    symbol: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintNFT: ({
    codeId,
    owner,
    tokenId,
    tokenUri
  }: {
    codeId: number;
    owner: string;
    tokenId: string;
    tokenUri: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class MintyplexMsgComposer implements MintyplexMsg {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createCollection = this.createCollection.bind(this);
    this.mintNFT = this.mintNFT.bind(this);
  }

  createCollection = ({
    codeId,
    name,
    symbol
  }: {
    codeId: number;
    name: string;
    symbol: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_collection: {
            code_id: codeId,
            name,
            symbol
          }
        })),
        funds: _funds
      })
    };
  };
  mintNFT = ({
    codeId,
    owner,
    tokenId,
    tokenUri
  }: {
    codeId: number;
    owner: string;
    tokenId: string;
    tokenUri: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_n_f_t: {
            code_id: codeId,
            owner,
            token_id: tokenId,
            token_uri: tokenUri
          }
        })),
        funds: _funds
      })
    };
  };
}