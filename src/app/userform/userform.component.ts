import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  userForm!: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  nominees = ['Father', 'Spouse', 'Daughter'];
  salutations = ['Mr', 'Mrs', 'Miss'];
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      salutation: [this.salutations[0], [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
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

  changenominee(e) {
    this.nominee.setValue(e.target.value, {
      onlySelf: true,
    });
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
}
