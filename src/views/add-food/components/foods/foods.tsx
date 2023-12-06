import React from 'react'
import { StyleSheet, View } from 'react-native'

import { FoodsItems } from '../../../../components'
import { useFetchFoods } from '../../hooks'
import { Filter } from '../filter'

export const Foods = (): JSX.Element => {
  const { foods, onFilter, onSetTodayFood } = useFetchFoods()

  return (
    <View style={styles.container}>
      <Filter onFilter={onFilter} />
      <FoodsItems
        foods={foods}
        iconName="add-circle-outline"
        onSetFood={onSetTodayFood}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
})
