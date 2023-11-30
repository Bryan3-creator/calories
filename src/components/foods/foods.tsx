import React from 'react'
import { type MealModel } from '../../models'
import { Meal } from '../meal'
import { ScrollView, StyleSheet, View } from 'react-native'

interface Props {
  foods: MealModel[]
}

export const FoodsItems = ({ foods }: Props): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {foods.map((meal) => (
          <Meal key={meal.mealId} meal={meal} />
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
