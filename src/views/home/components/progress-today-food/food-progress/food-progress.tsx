import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { MealInfo } from './meal-info'
import { usehomeContext } from '../../../hooks'

export const FoodProgress = (): JSX.Element => {
  const { todayStatistics } = usehomeContext()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.infoContainer}>
        <MealInfo field="Total" value={todayStatistics.total} />
        <MealInfo field="Consumed" value={todayStatistics.consumed} />
        <MealInfo field="Remaining" value={todayStatistics.remaining} />
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
