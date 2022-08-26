import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  private url= 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) { }
  
  _VarTitle: string = 'Hello World';
  ngOnInit(): void {
    const auth = getAuth();

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
