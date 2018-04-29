import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { NewUserComponent } from '../new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, NewUserComponent]
})
export class UserModule { }
