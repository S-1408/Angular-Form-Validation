import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;



 constructor(private formBuilder: FormBuilder,
             private http: HttpClient){}

 ngOnInit(){
       this.registerForm = this.formBuilder.group({

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)],
    confirmPassword : ['', Validators.required],
    acceptTerms: [false,  Validators.requiredTrue]

   }, {
    //  validator: MustMatch('password','confirmPassword')
   });
 }

 get f(){
   return this.registerForm.controls;
 }
 onSubmit(){
 this.submitted = true;

 if(this.registerForm.invalid){
   return;
 }

 alert('SUCCESS!!)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
 }
 onReset(){
  this.submitted = false;
  this.registerForm.reset();

}

}
