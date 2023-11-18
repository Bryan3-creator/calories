import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from '../../components'
import { Calories, ProgressTodayFood } from './components'

export const HomeView = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <Calories />
      <ProgressTodayFood />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
