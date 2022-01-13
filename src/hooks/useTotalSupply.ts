import { BigNumber } from '@ethersproject/bignumber'
import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core'
<<<<<<< HEAD
import { BigNumber } from 'ethers'
=======
>>>>>>> e52c73526b6a11445570f0ba8615a65dd7a6d840
import { useSingleCallResult } from 'lib/hooks/multicall'

import { useTokenContract } from './useContract'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
export function useTotalSupply(token?: Currency): CurrencyAmount<Token> | undefined {
  const contract = useTokenContract(token?.isToken ? token.address : undefined, false)

  const totalSupply: BigNumber = useSingleCallResult(contract, 'totalSupply')?.result?.[0]

  return token?.isToken && totalSupply ? CurrencyAmount.fromRawAmount(token, totalSupply.toString()) : undefined
}
