import { RouterModule } from '@angular/router';
import { ProjectComponent } from './portfolio/project/project.component';
import { ProjectStartComponent } from './portfolio/project-start/project-start.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { state: 'home'} },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'resume', component: ResumeComponent, } ,
    { path: 'portfolio', component: PortfolioComponent, children: [
      { path: '', component: ProjectStartComponent},
      { path: ':id', component: ProjectComponent }
    ]},
    { path: '**', component: HomeComponent }
   ];

   export const AppRouting = RouterModule.forRoot(routes, {
  });
