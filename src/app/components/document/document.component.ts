import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documentForm: FormGroup;
  documentNames = ['Voter ID-Card', 'Passport', 'Adhaar card', 'PAN card', 'Birth certificate', 'Driving License', 'Other'];
  documents = [];
  fileReset;
  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
  ) { }



  ngOnInit(): void {
    this.documentNames.sort();
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
    var index = this.documentNames.indexOf(this.documentForm.value.name);
    if (index !== -1) {
      this.documentNames.splice(index, 1);
    }
    this.documentForm.reset();
    // this.documentNames.sort();

  }

  showOtherName() {
    return this.documentForm.value.name == 'Other'
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

  deleteDoc(index) {
    this.documentNames.push(this.getDocs()[index].name);
    this.userService.removeDocs(index);
    this.documentNames.sort()
  }
}
