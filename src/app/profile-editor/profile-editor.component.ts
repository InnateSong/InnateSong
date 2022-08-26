import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  // Form control
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    county: new FormControl('')
    })
  })

  // Submits the form controls to the control group
  OnSubmit(){
    console.log(this.profileForm.value)
  }

  // Updates when this function is called
  UpdateProfile(){
    this.profileForm.patchValue({
      firstName:'nancy',
      address:{
        street: '123 Drew street'
      }
    });
    console.log(this.profileForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
