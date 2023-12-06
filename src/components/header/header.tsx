import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { UserAdapter } from '../../adapter'
import userMock from '../../mocks/user-mock/user.mock.json'
import { type UserResponse } from '../../server-response'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const user = new UserAdapter().one(userMock as UserResponse)

export const Header = (): JSX.Element => {
  const { canGoBack, goBack } = useNavigation()

  const handlePressNavigation = (): void => {
    goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {canGoBack() && (
          <Button
            icon={<Icon name="arrow-back" size={20} />}
            color="transparent"
            onPress={handlePressNavigation}
          />
        )}
        <View>
          <Text style={styles.name}>Hello {user.name}</Text>
          <Text style={styles.welcomeMessage}>Welcolme back to your goal</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{ uri: user.avatar }} style={styles.profileImage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
  },
  welcomeMessage: {
    color: '#808080',
    fontSize: 12,
    fontWeight: '400',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
})
