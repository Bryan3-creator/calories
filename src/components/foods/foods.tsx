import React from 'react'
import { type MealModel } from '../../models'
import { Meal } from '../meal'
import { ScrollView, StyleSheet, View } from 'react-native'
import { type MealId } from '../../types'

interface Props {
  foods: MealModel[]
  iconName: string
  onSetFood?: (food: MealModel) => Promise<void>
  onDeleteFood?: (mealId: MealId) => void
}

export const FoodsItems = ({
  foods,
  iconName,
  onSetFood,
  onDeleteFood,
}: Props): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {foods.map((meal) => (
          <Meal
            key={meal.mealId}
            meal={meal}
            iconName={iconName}
            onSetFood={onSetFood}
            onDeleteFood={onDeleteFood}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
  },
})
