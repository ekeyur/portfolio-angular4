import { Project } from './../project.model';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-project-start',
  templateUrl: './project-start.component.html',
  styleUrls: ['./project-start.component.css'],
  animations: [
    trigger('itemAnim', [
      transition('* => *', [
        style({transform: 'translateX(100%)'}),
        animate(700)
      ])
    ])
  ]
})
export class ProjectStartComponent implements OnInit {

  project: Project;

  constructor() {
    this.project = {
      id           : 5,
      project_name : 'Portfolio',
      description  : `In an attmpt to learn Angular4, I decided to redo my portfolio using
                      Angular4. Click the links on the left to checkout my other projects.`,
      websiteUrl   : 'http://ekeyur.com',
      imageUrl     : '../../assets/images/portfolio.png',
      githubUrl    : 'https://github.com/ekeyur/portfolio-angular4',
      stacks       : ['Angular4', 'FxLayout', 'CSS3']
    }
  }

  ngOnInit() {
  }

}
