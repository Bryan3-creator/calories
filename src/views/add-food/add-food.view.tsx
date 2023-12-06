import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from '../../components'
import { AddFoodLegend, AddFoodModal, Foods } from './components'

export const AddFoodView = (): JSX.Element => {
  const [isActiveModal, setisActiveModal] = useState<boolean>(false)

  const handleModalState = (): void => {
    setisActiveModal(!isActiveModal)
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddFoodLegend onOpenModal={handleModalState} />
      <AddFoodModal visible={isActiveModal} onCloseModal={handleModalState} />
      <Foods />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
})
