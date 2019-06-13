import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstName = 'Felipe';
  lastName = 'Rodriguez';
  car: string;
  check: boolean;
  status: boolean;
  posts: object[];
  
  constructor(){
    console.log("what's good!");
    this.getUserStatus();
    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 2'},
      {title: 'Post 3'},
      {title: 'Post 4'},
      {title: 'Post 5'}
    ];
  }
  displayName(){
    return this.firstName+" "+this.lastName;
  }
  getUserStatus(){
    this.status = true;
  }
  greetPerson(){
    alert("What's up!");
  }
  mousingOver(){
    console.log("we just moused!")
  }
  keyDowning(){
    console.log("we just key downed")
  }

}
