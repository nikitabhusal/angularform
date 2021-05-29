import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      salutation: [this.salutations[0], [Validators.required]],
      name: ['', [Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
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
    this.userDetails.nomineeDetails = values;
    console.log("On Submit ", this.userDetails)
    alert('Submitted')
  }
}
