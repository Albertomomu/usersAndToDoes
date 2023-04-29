import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/core/interfaces/todo.interface';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent {
  $todoList: Observable<ITodo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.$todoList = this.todoService.getTodoList();
  }
}
