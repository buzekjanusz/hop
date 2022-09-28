const hTokens = new Set(['hUSDC', 'hUSDT', 'hDAI', 'hMATIC', 'hETH', 'hHOP', 'hSNX'])

function isHToken (tokenSymbol: string) {
  return hTokens.has(tokenSymbol)
}

export default isHToken
