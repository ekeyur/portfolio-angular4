import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
  animations: [
    trigger('itemAnim', [
      transition('* => *', [
        style({transform: 'translateX(-100%)'}),
        animate(900)
      ])     
    ])
  ]
})
export class HomeComponent implements OnInit {
    name: string = 'Keyur Patel';
    title: string = 'Software Developer';
    constructor() {
    
   }

  ngOnInit() {
  
  }
}
