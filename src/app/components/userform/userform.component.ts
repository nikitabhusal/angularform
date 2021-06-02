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
  salutaionMap = { 'Father': 'Mr', 'Spouse': 'Mrs', 'Daughter': 'Miss' }

  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }
  nomineeSal = ''
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      salutation: [this.salutations[0], [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      gender: ['', [Validators.required]],
      nominee: ['', [Validators.required]],
      nomineeForm: this.formBuilder.group({
        salutation: [{ value: this.salutaionMap[this.nomineeSal] }, [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        pincode: ['', [Validators.required, Validators.pattern("[0-9]{3,6}")]],
        bankname: ['', [Validators.required]],
        accnumber: ['', [Validators.required, Validators.pattern("[0-9]{9,15}")]],
        IFSCcode: ['', [Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      })
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

  get nomineeForm() {
    return this.userForm.get('nomineeForm');
  }

  changesalutation(e) {
    this.salutation.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeNomineeSalutation() {
    this.nomineeSal = this.salutaionMap[this.nominee.value]
    this.nomineeForm.value.salutation = this.nomineeSal
  }


  onSubmit() {
    this.userDetails = this.userForm.value;
    this.userDetails.id = Math.floor(100000000 + Math.random() * 900000000);
    this.userDetails.documents = [];

    this.userService.setUser(this.userDetails)
    console.log("On Submit ", this.userService.getUser())
    alert('Submitted')
    this.router.navigate(['/document']);

  }
}
