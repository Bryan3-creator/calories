import type * as MealTypes from '../../types'

export interface MealModel {
  mealId: MealTypes.MealId
  name: MealTypes.MealName
  calories: MealTypes.MealCalories
  portion: MealTypes.MealPortion
  createdAt: MealTypes.MealCreatedAt
}
