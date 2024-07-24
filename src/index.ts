export * from "./codegen";

import { contracts } from "./codegen";

const mnemonic =
  "tragic man unveil law index keep turtle aunt labor music virus today reflect immune print unveil farm uncover employ ocean leopard slab fix buyer";

const cosmosPen = require("@cosmjs/sdk38");
const cosmosStargate = require("@cosmjs/cosmwasm-stargate");
const cosmosTendermint = require("@cosmjs/tendermint-rpc");
const cosmosAmino = require("@cosmjs/amino");

async function main() {
  const pen = await cosmosPen.Secp256k1Pen.fromMnemonic(mnemonic);

  const address = cosmosTendermint.pubkeyToAddress(
    cosmosAmino.encodeSecp256k1Pubkey(pen.pubkey),
    "xion",
  );
  console.log(address);

  const sc = new cosmosStargate.SigningCosmWasmClient(
    "https://rpc.xion-testnet-1.burnt.com/",
    address,
    (signBytes) => pen.sign(signBytes),
  );
  console.log(sc);

  const contractAddress =
    "xion1z7lyct6reu9gzsuq382ewn0jd3s4c85t6tl0z2gn5zq63px8feysxm5umq";
  const sender = "xion1vprmgc7066c9d9pfu4k0uq47v7lqz5tjk6f84m";

  const client = new contracts.Mintyplex.MintyplexClient(
    sc,
    sender,
    contractAddress,
  );
}
main();
