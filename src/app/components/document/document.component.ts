import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documentForm: FormGroup;
  documents = ['voter ID-Card', 'passport', 'Adhaar card','PAN card',' Birth certificate',' Driving License','Other' ];
  constructor(public formBuilder: FormBuilder) { }
  

  
  ngOnInit(): void {
    this.documentForm = this.formBuilder.group({
      document: ['', [Validators.required]],
     
    });
  }
  get getControl() {
    return this.documentForm.controls;
  }

  get document() {
    return this.documentForm.get('document');
  }

  changegender(e) {
    this.document.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  
 
}
