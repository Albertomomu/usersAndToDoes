import { IUser } from '../interfaces/user.interface';

export interface IUserApi {
  limit: Number;
  skip: number;
  total: number;
  users: IUser[];
}
