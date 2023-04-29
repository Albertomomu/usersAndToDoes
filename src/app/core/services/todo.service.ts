import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { ITodoApi } from '../interfaces/todoApi.interface';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  BASE_URL = environment.todosApi;
  constructor(private httpClient: HttpClient) {}

  getTodoList(): Observable<ITodo[]> {
    return this.httpClient
      .get<ITodoApi>(this.BASE_URL)
      .pipe(map(({ todos }) => todos));
  }
}
