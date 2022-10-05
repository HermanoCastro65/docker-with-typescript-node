import { TUser } from '../types'
import { IUser } from '../interfaces'
import { CreateUser } from './create.class'

class User implements IUser {
  user: TUser

  constructor({ id, name }: TUser) {
    const user = new CreateUser().creator({ id, name })
    if (user) this.user = user
  }

  get = () => this.user
  getId = () => this.user.id
  getName = () => this.user.name
  set = (user: TUser) => (this.user = user)
  setId = (id: number) => (this.user.id = id)
  setName = (name: string) => (this.user.name = name)
}

export default User
