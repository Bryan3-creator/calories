import type * as UserTypes from '../../types'

export interface UserModel {
  userId: UserTypes.UserId
  name: UserTypes.UserName
  username: UserTypes.UserUsername
  avatar: UserTypes.UserAvatar
  createdAt: UserTypes.UserCreatedAt
}
