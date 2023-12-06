import { useCallback, useState } from 'react'

import { type MealModel } from '../../../models'
import { getFoodsService } from '../services'
import { DEFAULT_TODAY_STATISTICS, type TodayStatistics } from '../types'
import { useFocusEffect } from '@react-navigation/native'
import { useFoodAsyncStorage } from '../../../hooks'
import { type MealId } from '../../../types'

export interface HomeContext {
  foods: MealModel[]
  todayStatistics: TodayStatistics
  onDeleteFood: (mealId: MealId) => void
}

export const useFetchFoods = (): HomeContext => {
  const [foods, setFoods] = useState<MealModel[]>([])
  const [todayStatistics, setTodayStatistics] = useState<TodayStatistics>(
    DEFAULT_TODAY_STATISTICS,
  )
  const { onDeleteTodayFood } = useFoodAsyncStorage()

  const calculateTodayStatistics = (foods: MealModel[]): void => {
    const consumedCalories = foods.reduce((prevValue, currentvalue) => {
      return prevValue + Number(currentvalue.calories)
    }, 0)
    const percentage = (consumedCalories / 2000) * 100
    const remaining = 2000 - consumedCalories
    setTodayStatistics({
      total: 2000,
      percentage,
      consumed: consumedCalories,
      remaining,
    })
  }

  const getFoods = async (): Promise<void> => {
    try {
      const foodResponse = await getFoodsService()
      setFoods(foodResponse)
      calculateTodayStatistics(foodResponse)
    } catch (_) {}
  }

  useFocusEffect(
    useCallback(() => {
      getFoods()
        .then((res) => res)
        .catch((error) => error)
    }, [foods]),
  )

  const handleDeleteFood = (mealId: MealId): void => {
    onDeleteTodayFood(mealId)
      .then((data) => {
        setFoods(data)
      })
      .catch((error) => error)
  }

  return {
    foods,
    todayStatistics,
    onDeleteFood: handleDeleteFood,
  }
}
