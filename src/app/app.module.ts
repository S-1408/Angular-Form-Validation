import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
1
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,

    FormComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
