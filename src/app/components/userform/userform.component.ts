import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  userForm!: FormGroup;
  userDetails: any;
  genders = ['Male', 'Female', 'Other'];
  nominees = ['Father', 'Spouse', 'Daughter'];
  salutations = ['Mr', 'Mrs', 'Miss'];
  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      salutation: [this.salutations[0], [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      gender: ['', [Validators.required]],
      nominee: ['', [Validators.required]],
    });
  }

  get getControl() {
    return this.userForm.controls;
  }

  get gender() {
    return this.userForm.get('gender');
  }

  changegender(e) {
    this.gender.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get nominee() {
    return this.userForm.get('nominee');
  }

  get salutation() {
    return this.userForm.get('salutation');
  }

  changesalutation(e) {
    this.salutation.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  onSubmit() {
    console.log(this.userForm.value);
  }

  submitAll(values) {
    this.userDetails = this.userForm.value;
    this.userDetails.id = Math.floor(100000000 + Math.random() * 900000000);
    this.userDetails.nomineeDetails = values;
    this.userDetails.documents = [];

    this.userService.setUser(this.userDetails)
    console.log("On Submit ", this.userService.getUser())
    alert('Submitted')
    this.router.navigate(['/document']);

  }
}
