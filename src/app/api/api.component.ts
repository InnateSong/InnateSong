import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { connect } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  private url= 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }


  content: any;
  
  ngOnInit(): void {

    const auth = getAuth();

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

    // observable for the above the url
    this.http.get(this.url).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
    
  }

}
