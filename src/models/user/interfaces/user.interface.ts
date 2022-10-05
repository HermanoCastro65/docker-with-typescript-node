import { TUser } from "../types/user.type";
import { IGetters } from "./getters.interfaces";
import { ISetters } from "./setters.interfaces";

export interface IUser extends IGetters, ISetters {
  user: TUser
}
