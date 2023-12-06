import { Input } from '@rneui/themed'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  label: string
  name: string
  value: string
  onChangeInput: (params: { key: string; value: string }) => void
}

export const InputAddFood = ({
  label,
  name,
  value,
  onChangeInput,
}: Props): JSX.Element => {
  const handleChangeInput = (text: string): void => {
    onChangeInput({
      key: name,
      value: text,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          onChangeText={handleChangeInput}
          value={value}
        />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputContainer: {
    flex: 2,
  },
  input: {
    fontSize: 14,
  },
  label: {
    fontSize: 15,
    flex: 1,
    fontWeight: '500',
  },
})
