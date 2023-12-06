import { Button, Icon } from '@rneui/themed'
import { Modal, StyleSheet, Text, View } from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import { InputAddFood } from './input-add-food'
import { useState } from 'react'
import { useFoodAsyncStorage } from '../../../../hooks'

interface Props {
  visible: boolean
  onCloseModal: () => void
}

export const AddFoodModal = ({ visible, onCloseModal }: Props): JSX.Element => {
  const [input, setInput] = useState({
    calories: '',
    name: '',
    portion: '',
  })
  const [isDisabledButton, setIsDisabledButton] = useState(true)
  const { onStoreMeal } = useFoodAsyncStorage()

  const handleChangeInput = ({
    key,
    value,
  }: {
    key: string
    value: string
  }): void => {
    setInput((prevValue) => ({
      ...prevValue,
      [key]: value,
    }))
    if (value === '') {
      setIsDisabledButton(true)
    } else {
      setIsDisabledButton(false)
    }
  }

  const handlePressAdd = (): void => {
    onStoreMeal({
      mealId: uuidv4(),
      name: input.name,
      calories: Number(input.calories),
      portion: input.portion,
      createdAt: new Date(),
    })
      .then((data) => data)
      .catch((error) => error)
    setInput({
      name: '',
      calories: '',
      portion: '',
    })
    onCloseModal()
  }

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onCloseModal}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              icon={<Icon name="close" />}
              color="transparent"
              onPress={onCloseModal}
            />
          </View>
          <Text style={styles.title}>Add Food</Text>
          <View style={styles.inputsContainer}>
            <InputAddFood
              label="Cal"
              name="calories"
              value={input.calories}
              onChangeInput={handleChangeInput}
            />
            <InputAddFood
              label="Name"
              name="name"
              value={input.name}
              onChangeInput={handleChangeInput}
            />
            <InputAddFood
              label="Portion"
              name="portion"
              value={input.portion}
              onChangeInput={handleChangeInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Icon name="add" color="#FFF" />}
              title="Add"
              radius="lg"
              color="#4ECB71"
              disabled={isDisabledButton}
              onPress={handlePressAdd}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    width: '80%',
    padding: 16,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  inputsContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
})
