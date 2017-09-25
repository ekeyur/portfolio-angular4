import { PortfolioService } from './portfolio.service';
import { Project } from './project.model';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {  trigger, style, transition, 
          keyframes, stagger, query, 
          animate, group } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    
  //   trigger('listAnim', [
  //     transition('* => *', [
  //       query(':enter', style({transform: 'translateX(0)'}), {optional: true}),
  //       query(':enter',
  //         stagger(600, [
  //           animate('800ms 1.2s ease-out', style({transform: 'translateX(100%)'}))
  //         ]), { optional: true })  
  //     ])
  //   ])


    trigger('listAnim', [
      transition('* => *', [
        style({transform: 'translateX(-100%)'}),
        animate(800)
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  constructor(private portfolioService: PortfolioService
             ) { }          

  ngOnInit() {
    this.projects = this.portfolioService.projects;
  
  }

  ngOnDestroy() {
   
  }
}
