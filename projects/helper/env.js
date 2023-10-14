const env = process.env

module.exports = {
  HISTORICAL: !!env.HISTORICAL,
  LLAMA_DEBUG_MODE: !!env.LLAMA_DEBUG_MODE,
  GETBLOCK_KEY: env.GETBLOCK_KEY,
  SOLANA_RPC: env.SOLANA_RPC,
  APTOS_RPC: env.APTOS_RPC,
  SUI_RPC: env.SUI_RPC,
  LOFTY_API: env.LOFTY_API,
  COVALENT_KEY: env.COVALENT_KEY,
  OLYMPUS_GRAPH_API_KEY: env.OLYMPUS_GRAPH_API_KEY,
}