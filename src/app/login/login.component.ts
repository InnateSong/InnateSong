import { Component, Input, OnInit } from '@angular/core';

// ---FIREBASE---
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router, RouterLink } from '@angular/router';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDilL8NOHEopDl3KRtTalqSQJHNsWgil-M",
  authDomain: "angularapp-a4fd3.firebaseapp.com",
  projectId: "angularapp-a4fd3",
  storageBucket: "angularapp-a4fd3.appspot.com",
  messagingSenderId: "386655474222",
  appId: "1:386655474222:web:134cbd9e41af70634205bf",
  measurementId: "G-ZXS639D06G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  error: string ='';

  // Form
  loginDetails = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    auth.signOut();
  }

  OnSubmit(){
    signInWithEmailAndPassword(auth, this.loginDetails.value.email, this.loginDetails.value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      this.router.navigate(['/private']);
    })
    .catch((error) => {
      const errorMessage = error.message;
      this.error = errorMessage;     
    });
  }

}
