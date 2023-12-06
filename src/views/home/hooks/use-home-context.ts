import { useContext } from 'react'
import { ContextProvider } from '../contexts/home-context-provider'
import { type CreateHomeContextProvider } from '../types'

export const usehomeContext = (): CreateHomeContextProvider => {
  return useContext(ContextProvider)
}
