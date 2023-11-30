import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  field: string
  value: number
}

export const MealInfo = ({ field, value }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>{field}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  field: {
    fontSize: 14,
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
  },
})
