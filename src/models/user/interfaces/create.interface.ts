import { TUser } from '../types'

export interface ICreateUser {
  creator: ({ id, name }: TUser) => TUser
}
