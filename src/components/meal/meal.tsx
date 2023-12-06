import { Icon } from '@rneui/base'
import { Button } from '@rneui/themed'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { type MealModel } from '../../models'
import { type MealId } from '../../types'

interface Props {
  meal: MealModel
  iconName: string
  onSetFood?: (food: MealModel) => Promise<void>
  onDeleteFood?: (mealId: MealId) => void
}

export const Meal = ({
  meal,
  iconName,
  onSetFood,
  onDeleteFood,
}: Props): JSX.Element => {
  const handlePress = (): void => {
    onSetFood?.(meal).catch((error) => error)
    onDeleteFood?.(meal.mealId)
  }
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{meal.name}</Text>
        <Text style={styles.portion}>{meal.portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          icon={<Icon name={iconName} />}
          color="transparent"
          onPress={handlePress}
        />
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
