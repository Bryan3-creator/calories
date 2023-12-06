import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FoodsItems } from '../../../../components'
import { usehomeContext } from '../../hooks'

export const Foods = (): JSX.Element => {
  const { foods, onDeleteFood } = usehomeContext()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foods</Text>
      <FoodsItems foods={foods} iconName="close" onDeleteFood={onDeleteFood} />
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
