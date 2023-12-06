import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from '../../components'
import { Calories, ProgressTodayFood, Foods } from './components'
import { HomeContextProvider } from './contexts'

export const HomeView = (): JSX.Element => {
  return (
    <HomeContextProvider>
      <View style={styles.container}>
        <Header />
        <Calories />
        <ProgressTodayFood />
        <Foods />
      </View>
    </HomeContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Fff',
  },
})
