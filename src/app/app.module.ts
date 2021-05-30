import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './components/userform/userform.component';
import { NomineeFormComponent } from './components/nominee-form/nominee-form.component';
import { DocumentComponent } from './components/document/document.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [AppComponent, UserformComponent, NomineeFormComponent, DocumentComponent, FormDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
