import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutingModule } from "./routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule } from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemEditComponent } from './components/todo-item-edit/todo-item-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    UserEditComponent,
    TodoComponent,
    TodoItemEditComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
