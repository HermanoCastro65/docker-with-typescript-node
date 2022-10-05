import { TUser } from '../types'

interface ISetUser {
  set: (user: TUser) => void
}

interface ISetUserId {
  setId: (id: number) => void
}

interface ISetUserName {
  setName: (name: string) => void
}

export interface ISetters extends ISetUser, ISetUserId, ISetUserName {}
