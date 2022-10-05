import { TUser } from '../types/user.type'

export interface ICreateUser {
  creator: ({ id, name }: TUser) => TUser
}
