import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documentForm: FormGroup;
  documentNames = ['Voter ID-Card', 'Passport', 'Adhaar card', 'PAN card', ' Birth certificate', ' Driving License', 'Other'];
  documents = [];
  constructor(public formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.documentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      otherName: [''],
      filename: ['', [Validators.required]],
    });
  }
  get getControl() {
    return this.documentForm.controls;
  }

  get name() {
    return this.documentForm.get('name');
  }
  get filename() {
    return this.documentForm.get('filename');
  }
  get otherName() {
    return this.documentForm.get('otherName');
  }

  changeName(e) {
    this.name.setValue(e.target.value, {
      onlySelf: true,
    });
    this.otherName.setValue('', {
      onlySelf: true,
    });
  }

  onSubmit() {
    console.log(this.isValidForm(), this.documentForm.value);

  }
  showOtherName() {
    return this.documentForm.value.name == 'Other'
  }

  isValidForm() {
    return (this.documentForm.value.filename != '' && this.documentForm.value.name != '') || (this.showOtherName() && this.documentForm.value.otherName != '');
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    this.documentForm.value.filename = file.name;
    event.value = '';
    console.log(this.documentForm.value.filename, event.target.files);

  }
}
