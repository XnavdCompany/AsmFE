import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: IUser[] = [];

  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe((response) => {
      this.users = response.data
    },error => console.log(error))
  }

  removeUser(id: any) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(item => item._id !== id)
    })
  }
}
