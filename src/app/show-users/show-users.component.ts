import { Component } from '@angular/core';
import {User, UserService} from "../shared/user.service";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent {

  users:User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((response)=> {
      this.users = response;
    })
  }

}
