import { useCallback, useState } from 'react'

import { type MealModel } from '../../../models'
import { useFoodAsyncStorage } from '../../../hooks'
import { useFocusEffect } from '@react-navigation/native'

interface FetchFoods {
  foods: MealModel[]
  onFilter: (name: string) => Promise<void>
  onSetTodayFood: (food: MealModel) => Promise<void>
}

export const useFetchFoods = (): FetchFoods => {
  const [foods, setFoods] = useState<MealModel[]>([])
  const { onGetFoods, onFilterFoods, onSetTodayFood } = useFoodAsyncStorage()

  const getFoods = async (): Promise<void> => {
    const foodsResponse = await onGetFoods()
    if (foodsResponse !== undefined) setFoods(foodsResponse)
  }

  useFocusEffect(
    useCallback(() => {
      getFoods()
        .then((data) => data)
        .catch((error) => error)
    }, []),
  )

  const handleFilter = async (name: string): Promise<void> => {
    const foodsResponse = await onFilterFoods(name)
    if (foodsResponse !== undefined) setFoods(foodsResponse)
  }

  return {
    foods,
    onFilter: handleFilter,
    onSetTodayFood,
  }
}
