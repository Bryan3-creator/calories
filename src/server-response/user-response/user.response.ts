import { type UserModel } from '../../models'

export interface UserResponse extends Omit<UserModel, 'createdAt'> {
  createdAt: string
}
