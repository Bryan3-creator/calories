import { type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { HomeView } from './src/views'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

export const App = (): ReactNode => {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <HomeView />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    flex: 1,
  },
})

export default App
