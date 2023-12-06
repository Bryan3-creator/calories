import { type MealModel } from '../models'
import { setItemAsyncStorage, getItemAsyncStorage } from '../utils'
import { MY_FOOD, MY_TODAY_FOOD } from '../consts'
import { type MealId } from '../types'

interface FoodAsyncStorage {
  onStoreMeal: (food: MealModel) => Promise<void>
  onSetTodayFood: (food: MealModel) => Promise<void>
  onGetFoods: () => Promise<MealModel[] | undefined>
  onDeleteTodayFood: (mealId: MealId) => Promise<MealModel[]>
  onFilterFoods: (name: string) => Promise<MealModel[] | undefined>
}

export const useFoodAsyncStorage = (): FoodAsyncStorage => {
  const handleGetFoods = async (): Promise<MealModel[] | undefined> => {
    try {
      const foods = await getItemAsyncStorage<MealModel[]>(MY_FOOD)
      if (foods !== null) {
        return foods
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleStoreMeal = async (food: MealModel): Promise<void> => {
    try {
      const foods = await getItemAsyncStorage<MealModel[]>(MY_FOOD)
      if (foods === null) {
        await setItemAsyncStorage<MealModel[]>({ key: MY_FOOD, data: [food] })
      } else {
        await setItemAsyncStorage<MealModel[]>({
          key: MY_FOOD,
          data: [...foods, food],
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSetTodayFood = async (food: MealModel): Promise<void> => {
    try {
      const foods = await getItemAsyncStorage<MealModel[]>(MY_TODAY_FOOD)
      if (foods === null) {
        await setItemAsyncStorage<MealModel[]>({
          key: MY_TODAY_FOOD,
          data: [food],
        })
      } else {
        await setItemAsyncStorage<MealModel[]>({
          key: MY_TODAY_FOOD,
          data: [...foods, food],
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTodayFood = async (
    mealId: MealId,
  ): Promise<MealModel[] | []> => {
    try {
      const foods = await getItemAsyncStorage<MealModel[]>(MY_TODAY_FOOD)
      if (foods === null) return []
      const filteredFoods = foods.filter((meal) => meal.mealId !== mealId)
      await setItemAsyncStorage({
        key: MY_TODAY_FOOD,
        data: filteredFoods,
      })
      return filteredFoods
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const handleFilterFoods = async (
    name: string,
  ): Promise<MealModel[] | undefined> => {
    try {
      const foodResponse = await getItemAsyncStorage<MealModel[]>(MY_FOOD)
      if (foodResponse === null) return
      return foodResponse.filter((food) =>
        food.name.toLowerCase().includes(name.toLowerCase()),
      )
    } catch (error) {
      console.log(error)
    }
  }

  return {
    onStoreMeal: handleStoreMeal,
    onSetTodayFood: handleSetTodayFood,
    onGetFoods: handleGetFoods,
    onDeleteTodayFood: handleDeleteTodayFood,
    onFilterFoods: handleFilterFoods,
  }
}
