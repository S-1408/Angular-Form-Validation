import { HeaderComponent } from './core/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';


const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'form-validation', component: FormValidationComponent},
  {path: 'header', component: HeaderComponent},
  {path:'' , redirectTo:'form',  pathMatch: 'full' },
  // {path:'**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
