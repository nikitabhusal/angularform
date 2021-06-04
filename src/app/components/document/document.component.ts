import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documentForm: FormGroup;
  // documentNames = ['Voter ID-Card', 'Passport', 'Adhaar card', 'PAN card', 'Birth certificate', 'Driving License', 'Other'];
  documentNames = [
    { key: 1, value: 'Voter ID-Card' },
    { key: 2, value: 'Passport' },
    { key: 3, value: 'Aadhaar card' },
    { key: 4, value: 'PAN card' },
    { key: 5, value: 'Birth certificate' },
    { key: 6, value: 'Driving License' },
    { key: 7, value: 'Other' }
  ];
  documents = [];
  fileReset;
  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
  ) { }



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
    this.userService.addDocs(this.documentForm.value);
    console.log(this.isValidForm(), this.userService.getDocs());
    this.fileReset.value = '';

    this.documentForm.reset();

  }

  showOtherName() {
    return this.documentForm.value.name == 7
  }

  isValidForm() {
    return (this.documentForm.value.filename && this.documentForm.value.filename != '' && this.documentForm.value.name && this.documentForm.value.name != '') || (this.showOtherName() && this.documentForm.value.otherName != '');
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    this.documentForm.value.filename = file.name;
    event.value = '';
    this.fileReset = event.target;
    console.log(this.documentForm.value.filename, event.target.files);
  }

  getDocs() {
    return this.userService.getDocs() || [];
  }

  deleteDoc(i, j) {
    this.userService.removeDocs(i, j);
  }
}
