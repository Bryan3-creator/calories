import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from '../../components'
import { Calories, ProgressTodayFood, Foods } from './components'

export const HomeView = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <Calories />
      <ProgressTodayFood />
      <Foods />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
