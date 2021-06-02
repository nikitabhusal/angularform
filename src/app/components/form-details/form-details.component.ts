import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  userInfo: any;
  constructor(
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.userInfo = this.userService.getUser();
    console.log(this.userInfo);

  }

}
