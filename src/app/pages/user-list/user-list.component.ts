import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList: IUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getToDoList().subscribe((users) => {
      this.userList = users;
      console.log(users);
    });
  }
}
