// export * from "./codegen";

import { contracts } from "./codegen";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import "dotenv/config";

const mnemonic = process.env.MNEMONIC;
const rpcUrl = process.env.RPC_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;
const sender = process.env.SENDER;

async function main() {
  let wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "xion",
  });

  const signingClient = await SigningCosmWasmClient.connectWithSigner(
    rpcUrl,
    wallet,
  );

  const client = new contracts.Mintyplex.MintyplexClient(
    signingClient,
    sender,
    contractAddress,
  );

  console.log(client);
}
main();
