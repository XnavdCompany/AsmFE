import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user!: IUser;
  userForm = this.fb.group({
    role: ['']
  })
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private back: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get("id");
      this.userService.getOneUser(id).subscribe(response => {
        const user: IUser = response.data;
        if (user !== undefined && user !== null) {
          this.user = user;
          this.userForm.patchValue({
            role: user.role
          })
        } else {
          // Xử lý trường hợp không tìm thấy sản phẩm
        }
      })
    })
  }
  onHandleEdit() {
    if (this.userForm.valid) {
      const user: IUser = {
        _id: this.user._id,
        role: this.userForm.value.role || "",
      }
      this.userService.updateUser(user).subscribe((data) => {
        this.back.navigate(["admin", "user"])
      })
    }
  }
}
