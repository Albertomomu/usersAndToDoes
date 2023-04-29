import { IUser } from './user.interface';

export interface IUserApi {
  limit: Number;
  skip: number;
  total: number;
  users: IUser[];
}
