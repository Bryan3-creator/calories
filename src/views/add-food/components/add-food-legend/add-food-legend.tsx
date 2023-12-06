import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from '@rneui/themed'

interface Props {
  onOpenModal: () => void
}

export const AddFoodLegend = ({ onOpenModal }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Add Food</Text>
      <Button
        icon={<Icon name="add-circle-outline" color="#FFF" />}
        radius="lg"
        color="#4ECB71"
        onPress={onOpenModal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legend: {
    fontSize: 20,
    fontWeight: '500',
  },
})
