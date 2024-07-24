// export * from "./codegen";

import { contracts } from "./codegen";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const mnemonic =
  "tragic man unveil law index keep turtle aunt labor music virus today reflect immune print unveil farm uncover employ ocean leopard slab fix buyer";

async function main() {
  // const pen = await cosmosPen.Secp256k1Pen.fromMnemonic(mnemonic);

  let wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "xion",
  });

  const signingClient = await SigningCosmWasmClient.connectWithSigner(
    "https://rpc.xion-testnet-1.burnt.com/",
    wallet,
  );

  const contractAddress =
    "xion1z7lyct6reu9gzsuq382ewn0jd3s4c85t6tl0z2gn5zq63px8feysxm5umq";
  const sender = "xion1vprmgc7066c9d9pfu4k0uq47v7lqz5tjk6f84m";

  const client = new contracts.Mintyplex.MintyplexClient(
    signingClient,
    sender,
    contractAddress,
  );

  console.log(client);
}
main();
