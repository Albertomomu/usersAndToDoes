import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserItemComponent } from './pages/user-list/components/user-item/user-item.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserListComponent, UserItemComponent, ToDoComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
