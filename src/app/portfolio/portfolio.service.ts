import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

  constructor() { }
   projects = [
    
    {
      id           : 0,
      project_name : 'AirNav',
      description  : 'Web app that provides turn-by-turn navigation and route view of point to point trips within the Atlanta airport. Created custom graph network using Dijkstra\'s algorithm and coded the majority of the back-end of the site.',
      websiteUrl   : 'http://airnavatl.com',
      imageUrl     : '../../assets/images/airnavatl.png',
      githubUrl    : 'https://github.com/jesslynlandgren/airnavATL',
      stacks       : ['Python', 'Dijkstra\'s Algorithm', 'Leaflet API', 'AngularJS']
    },
    {
      id           : 1,
      project_name : 'Fabulari',
      description  : 'Fabulari is a free app that models how to use communication devices for students with disabilities. It feature of quick error and collecting rewards keep the kids engaged.',
      websiteUrl   : 'http://fabulari.org',
      imageUrl     : '../../assets/images/fabulari.png',
      githubUrl    : 'https://github.com/DigitalCrafts-September-2016-Cohort/fabular',
      stacks       : ['AngularJS', 'MongoDB', 'NodeJS', 'Express']
    },
    {
      id           : 2,
      project_name : 'TripGoalie',
      description  : 'Web app to facilitate safe travel of minors on MARTA. Completed at the October 2016 MARTA Hackathon and partnered with Soccer in the Streets. Designed and coded entire site back-end with one other team member.',
      websiteUrl   : 'http://tripgoalie.com',
      imageUrl     : '../../assets/images/tripgoalie.png',
      githubUrl    : 'https://github.com/SoccerStreets/soccerstreets',
      stacks       : ['Python', 'Jinja2', 'PostGreSQL', 'Flask', 'BootStrap']
    },   
    { id           : 3,
      project_name : 'Grillber',
      description  : 'A store front for renting grills by the hour. Designed the database and coded the majority of the backed with one other team member.',
      websiteUrl   : 'http://grillber.com',
      imageUrl     : '../../assets/images/grillber.png',
      githubUrl    : 'https://github.com/DigitalCrafts-September-2016-Cohort/apollo_grillber',
      stacks       : ['Python', 'PostGreSQL', 'Flask', 'Jinja2', 'BootStrap']
    },
    { 
      id           : 4,
      project_name : 'Portfolio',
      description  : 'In an attmpt to learn Angular4, I decided to redo my portfolio using Angular4. Click the links on the left to checkout my other projects.',
      websiteUrl   : 'http://ekeyur.com',
      imageUrl     : '../../assets/images/portfolio.png',
      githubUrl    : 'https://github.com/ekeyur/portfolio-angular4',
      stacks       : ['Angular4', 'FxLayout', 'CSS3']
    }
  ]

  getProject(id: number) {
    return this.projects[id];
  }

}
