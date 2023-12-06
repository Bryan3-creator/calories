import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FoodProgress } from './food-progress'
import { ProgressCircle } from './progress-circle'
export const ProgressTodayFood = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ProgressCircle />
      <FoodProgress />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
})
