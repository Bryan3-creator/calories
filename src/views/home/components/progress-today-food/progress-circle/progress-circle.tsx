import React from 'react'
import { View, StyleSheet } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'

export const ProgressCircle = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <CircularProgress value={10} valueSuffix="%" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
