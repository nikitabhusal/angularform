import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';
import { UserformComponent } from './components/userform/userform.component';

const routes: Routes = [
  { path: '', component: UserformComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'success', component: FormDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
