import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankService } from 'src/app/services/bank.service';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-nominee-form',
  templateUrl: './nominee-form.component.html',
  styleUrls: ['./nominee-form.component.css'],
})
export class NomineeFormComponent implements OnInit {
  @Input('nomineeForm') nomineeForm: FormGroup;
  @Input('nomineeSal') nomineeSal = '';
  states = [];

    bankNames = [];
  constructor(public formBuilder: FormBuilder,private bankService: BankService , private stateService: StateService) { }

  ngOnInit(): void {
    this.bankNames = this.bankService.getBanks()
    this.states = this.stateService.getStates()
  }

  get getControl() {
    return this.nomineeForm.controls;
  }

  get salutation() {
    return this.nomineeForm.get('salutation');
  }


  
}
