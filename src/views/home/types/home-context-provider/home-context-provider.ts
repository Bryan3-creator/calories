import { type MealModel } from '../../../../models'
import { type MealId } from '../../../../types'

export interface TodayStatistics {
  total: number
  percentage: number
  consumed: number
  remaining: number
}

export const DEFAULT_TODAY_STATISTICS: TodayStatistics = {
  total: 2000,
  percentage: 0,
  consumed: 0,
  remaining: 0,
}

export const DEFAULT_FOODS: MealModel[] = []

export interface CreateHomeContextProvider {
  foods: MealModel[]
  todayStatistics: TodayStatistics
  onDeleteFood: (mealId: MealId) => void
}

export const DEFAULT_HOME_CONTEXT_VALUES: CreateHomeContextProvider = {
  foods: DEFAULT_FOODS,
  todayStatistics: DEFAULT_TODAY_STATISTICS,
  onDeleteFood: () => undefined,
}
