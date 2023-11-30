import { Icon } from '@rneui/base'
import { Button } from '@rneui/themed'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { type MealModel } from '../../models'

interface Props {
  meal: MealModel
}

export const Meal = ({ meal }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{meal.name}</Text>
        <Text style={styles.portion}>{meal.portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button icon={<Icon name="close" />} color="transparent" />
        <Text style={styles.calories}>{meal.calories} Cal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADE8AF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 14,
  },
  leftContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
  portion: {
    color: '#808080',
    fontSize: 13,
  },
  rightContainer: {
    flexDirection: 'column',
  },
  calories: {
    fontSize: 15,
    fontWeight: '500',
  },
})
