import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { UserAdapter } from '../../adapter'
import userMock from '../../mocks/user-mock/user.mock.json'
import { type UserResponse } from '../../server-response'

const user = new UserAdapter().one(userMock as UserResponse)

export const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>Hello {user.name}</Text>
        <Text style={styles.welcomeMessage}>Welcolme back to your goal</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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
    flex: 1,
    gap: -2,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
})
