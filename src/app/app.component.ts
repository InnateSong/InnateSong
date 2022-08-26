import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { }
  
  pageTitle: string = "INNATESONG";
  
  userStatus: string = '';

  ngOnInit(): void {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.userStatus=uid;

        console.log('Logged in');
      } else {
        console.log('Not logged in')
      }
    })
  }

  // Logout - only found on the home page
  Logout(){
    auth.signOut()
  }

  title = 'AngularPractise';
}
