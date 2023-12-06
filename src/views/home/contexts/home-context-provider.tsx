import { type ReactNode, createContext } from 'react'
import { useFetchFoods } from '../hooks/use-fetch-foods'
import {
  DEFAULT_HOME_CONTEXT_VALUES,
  type CreateHomeContextProvider,
} from '../types'

export const ContextProvider = createContext<CreateHomeContextProvider>(
  DEFAULT_HOME_CONTEXT_VALUES,
)

export const HomeContextProvider = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const fecthFoods = useFetchFoods()

  return (
    <ContextProvider.Provider value={{ ...fecthFoods }}>
      {children}
    </ContextProvider.Provider>
  )
}
