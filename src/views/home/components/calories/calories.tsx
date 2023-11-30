import { View, Text, StyleSheet } from 'react-native'
import { Button } from '@rneui/themed'
import { Icon } from '@rneui/base'

export const Calories = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Calories</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" color="#FFF" />}
          radius="lg"
          color="#4ECB71"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
})
