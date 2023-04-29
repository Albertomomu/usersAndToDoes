import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from '../interfaces/user.interface';
import { IUserApi } from './userApi.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  BASE_URL = environment.usersApi;

  constructor(private httpClient: HttpClient) {}

  getToDoList(): Observable<IUser[]> {
    return this.httpClient
      .get<IUserApi>(this.BASE_URL)
      .pipe(map((data) => data.users));
  }
}
