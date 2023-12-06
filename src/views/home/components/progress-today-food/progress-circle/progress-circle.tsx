import React from 'react'
import { View, StyleSheet } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'
import { usehomeContext } from '../../../hooks'

export const ProgressCircle = (): JSX.Element => {
  const {
    todayStatistics: { percentage },
  } = usehomeContext()
  return (
    <View style={styles.container}>
      <CircularProgress value={percentage} valueSuffix="%" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
