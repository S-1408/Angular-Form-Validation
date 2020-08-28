import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

   registrationForm: FormGroup;
   submitted = false;


   fileData: File = null;
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
// city name
   City: any = ['Florida', 'South Dakota', 'Tennessee' , ' Michigan']

  constructor(private formBuilder: FormBuilder,
              private cd: ChangeDetectorRef,
              private http: HttpClient


    ) { }

  ngOnInit() {

     this.registrationForm = this.formBuilder.group({
       fullName: this.formBuilder.group({
        firstName : [ '', Validators.required, Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')],
        lastName: [ '', Validators.required],
       }),
       email: ['', Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
       phoneNumber : ['', Validators.maxLength(10)],
       address: this.formBuilder.group({

        street: ['', Validators.required],
        city: ['', Validators.required],
        cityName: ['', Validators.required]
       }),

       addDynamicElement: this.formBuilder.array([])

     });


    }


// choose city using select dropdown
 changeCity(e){
   this.registrationForm.get('address.cityName').setValue(e.target.value ,{
     onlySelf: true
   });

 }
 get addDynamicElement(){
   return this.registrationForm.get('addDynamicElement') as FormArray
}

addSuperPowers(){
  this.addDynamicElement.push(this.formBuilder.control(''))
}
 // Submit Registration Form
 onSubmit() {
  this.submitted = true;
  if(!this.registrationForm.valid) {
    alert('Please fill all the required fields to create a super hero!')
    return false;
  } else {
    console.log(this.registrationForm.value);
  }
}

fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
// Show preview
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();
reader.readAsDataURL(this.fileData);
reader.onload = (_event) => {
  this.previewUrl = reader.result;
}
}

}
