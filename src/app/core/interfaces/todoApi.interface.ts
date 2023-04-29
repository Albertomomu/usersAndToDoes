import { ITodo } from './todo.interface';

export interface ITodoApi {
  limit: Number;
  skip: number;
  total: number;
  todos: ITodo[];
}
