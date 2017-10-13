import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit {
  constructor(private userService: UserService) { }

  users;
  user;

  getUsers() {    
    return this.userService.getUsers();
  }

  ngOnInit() {
    this.getUsers()
      .then(data => {
        this.users = data;
      });
  }

  newUser(user: User) {
    this.user = user;
    this.users.push(this.user);
  }
}

