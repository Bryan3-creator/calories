import { type MealModel } from '../../models'

export interface MealResponse extends Omit<MealModel, 'createdAt'> {
  createdAt: string
}
