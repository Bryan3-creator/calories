import { type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { NavigationContainer } from '@react-navigation/native'
import { IndexRouter } from './src/router'

export const App = (): ReactNode => {
  return (
    <NavigationContainer>
      <ExpoStatusBar style="light" />
      <View style={styles.container}>
        <IndexRouter />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 12,
    flex: 1,
  },
})

export default App
