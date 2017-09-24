import { PortfolioService } from './../portfolio.service';
import { Project } from './../project.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, style, transition, animate, group } from '@angular/animations';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('itemAnim', [
      transition('* => *', [
        style({transform: 'translateX(100%)'}),
        animate(700)
      ])     
    ])
  ]
})
export class ProjectComponent implements OnInit, OnDestroy {
  project: Project;
  projectId: number;
  subscription: Subscription;
  constructor(private route: ActivatedRoute,
              private portfolioService: PortfolioService) { }
  
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.projectId = +params['id'];
        this.project = this.portfolioService.getProject(this.projectId);
      }
    );
  }

  onClick() {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
