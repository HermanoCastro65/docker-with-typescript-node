import { TUser } from '../types'

interface IGetUser {
  get: () => TUser
}

interface IGetUserId {
  getId: () => number
}

interface IGetUserName {
  getName: () => string
}

export interface IGetters extends IGetUser, IGetUserId, IGetUserName {}
