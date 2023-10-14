const ADDRESSES = require("../helper/coreAssets.json");
const { pool2 } = require("../helper/pool2");
const { stakings } = require("../helper/staking");
const { sumTokens2 } = require("./../helper/unwrapLPs");

// Staking on Mainnet: uni-v2
const LEET_WETH_univ2 = "0xdad6a675ff6216c456b467570a7fc4801f495204";
const LEET_WETH_univ2_staking = "0xa10fade7038ab58a3efadd47b98224b4a5174f6d";

module.exports = {
  ethereum: {
    tvl: (async) => ({}),
    pool2: stakings([LEET_WETH_univ2_staking], [LEET_WETH_univ2]),
  },
};
