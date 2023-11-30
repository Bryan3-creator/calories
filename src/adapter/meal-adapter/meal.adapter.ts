import { type MealModel } from '../../models'
import { type MealResponse } from '../../server-response'

export class FoodAdapter {
  public constructor(private readonly food: MealResponse[]) {}

  public one = (meal: MealResponse): MealModel => {
    return {
      mealId: meal.mealId,
      name: meal.name,
      portion: meal.portion,
      calories: meal.calories,
      createdAt: new Date(meal.createdAt),
    }
  }

  public all = (): MealModel[] => {
    return this.food.map((meal) => this.one(meal))
  }
}
