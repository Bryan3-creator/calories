import { type UserModel } from '../../models'
import { type UserResponse } from '../../server-response'

export class UserAdapter {
  public one = (user: UserResponse): UserModel => {
    return {
      userId: user.userId,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      createdAt: user.createdAt,
    }
  }

  public all = (users: UserResponse[]): UserModel[] => {
    return users.map((user) => this.one(user))
  }
}
