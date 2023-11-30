import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { MealInfo } from './meal-info'

export const FoodProgress = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.infoContainer}>
        <MealInfo field="Total" value={2000} />
        <MealInfo field="Consumed" value={485} />
        <MealInfo field="Calories" value={1515} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 5,
    marginTop: 15,
  },
})
