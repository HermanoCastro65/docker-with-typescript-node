import { ICreateUser } from "../interfaces"
import { TUser } from "../types"

export class CreateUser implements ICreateUser {
  creator = (user: TUser) => {
    const { id, name } = user
    if (!id) throw new Error('invalid id')
    if (!name) throw new Error('invalid name')
    return user
  }
}
