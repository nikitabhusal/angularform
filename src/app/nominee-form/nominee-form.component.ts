import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nominee-form',
  templateUrl: './nominee-form.component.html',
  styleUrls: ['./nominee-form.component.css'],
})
export class NomineeFormComponent implements OnInit {
  nomineeForm: FormGroup;
  @Input('nominee') nominee = '';
  salutations = ['Mr', 'Mrs', 'Miss'];
  salutaionMap = { 'Father': 'Mr', 'Spouse': 'Mrs', 'Daughter': 'Miss' }
  districts = [
    'Ahmednagar',
    'Akola',
    'Amravati',
    'Aurangabad',
    'Beed',
    'Bhandara',
    'Buldhana',
    'Chandrapur',
    'Dhule',
    'Nanded',
    'Nandurbar',
    'Nashik',
    'Osmanabad',
    'Palghar',
    'Parbhani',
    'Pune',
    'Raigad',
    'Ratnagiri',
    'Sangli',
    'Satara',
    'Sindhudurg',
    'Solapur',
    'Thane',
    'Wardha',
    'Washim',
    'Yavatmal',
  ];
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('Heyyyy', this.nominee);

    this.nomineeForm = this.formBuilder.group({
      salutation: ['Mrs', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      bankname: ['', [Validators.required]],
      accnumber: ['', [Validators.required]],
      IFSCcode: ['', [Validators.required]],
    });
  }

  get getControl() {
    return this.nomineeForm.controls;
  }

  onSubmit() {
    console.log(this.nomineeForm);
  }
  get salutation() {
    return this.nomineeForm.get('salutation');
  }

  changesalutation(e) {
    this.salutation.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get district() {
    return this.nomineeForm.get('district');
  }

  changedistrict(e) {
    this.district.setValue(e.target.value, {
      onlySelf: true,
    });
  }
}
