import { FoodAdapter } from '../../../adapter'
import { type MealModel } from '../../../models'
import mockFoods from '../../../mocks/meal-mock/foods.json'
import { type MealResponse } from '../../../server-response'

export const getFoodsService = async (): Promise<MealModel[]> => {
  const adaptedFoods = new FoodAdapter(mockFoods as MealResponse[]).all()
  return await Promise.resolve(adaptedFoods)
}
