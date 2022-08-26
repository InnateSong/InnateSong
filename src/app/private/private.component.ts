import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})

export class PrivateComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('Logged in');
        // ...
      } else {
        // User is signed out
        // ...
        console.log('Not logged in')
        this.router.navigate(['/home'])
      }
    })

  }
}
