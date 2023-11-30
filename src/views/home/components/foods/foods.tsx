import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { type MealModel } from '../../../../models'
import { getFoodsService } from '../../services'
import { FoodsItems } from '../../../../components'

export const Foods = (): JSX.Element => {
  const [foods, setFoods] = useState<MealModel[]>([])

  const getFoods = async (): Promise<void> => {
    try {
      const foodResponse = await getFoodsService()
      setFoods(foodResponse)
    } catch (_) {}
  }

  useEffect(() => {
    getFoods()
      .then((res) => res)
      .catch((error) => error)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foods</Text>
      <FoodsItems foods={foods} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
  },
})
