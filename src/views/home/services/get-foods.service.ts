import { type MealModel } from '../../../models'
import { getItemAsyncStorage } from '../../../utils'
import { MY_TODAY_FOOD } from '../../../consts'

export const getFoodsService = async (): Promise<MealModel[]> => {
  return (await getItemAsyncStorage(MY_TODAY_FOOD)) ?? []
}
