import { Component, OnInit } from '@angular/core';
import  {Typed}  from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
    name: string = 'Keyur Patel';
    title: string = 'Software Developer';
    constructor() {
    
   }

  ngOnInit() {
  //     this.typed = new Typed(".element", {
  //     stringsElement: '#typed-strings',  
  //     strings: ["This is a JavaScript library", "This is an ES6 module"],
  //     smartBackspace: true // Default value
  //   });
  }
}
