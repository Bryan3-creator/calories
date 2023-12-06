import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input } from '@rneui/themed'

interface Props {
  onFilter: (name: string) => Promise<void>
}

export const Filter = ({ onFilter }: Props): JSX.Element => {
  const handleFilter = (text: string): void => {
    onFilter(text).catch((error) => error)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Apples, fries soda..."
          style={styles.input}
          onChangeText={handleFilter}
        />
      </View>
      <Button title="search" color="#4ECB71" radius="lg" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    flex: 3,
    marginRight: 16,
  },
  input: {
    fontSize: 14,
  },
})
