import { AppRouting } from './app.routing';
import { PortfolioService } from './portfolio/portfolio.service';
import { HeaderService } from './header/header.service';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ProjectStartComponent } from './portfolio/project-start/project-start.component';
import { HighlightDirective } from './highlight.directive';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    PortfolioComponent,
    SkillsComponent,
    FooterComponent,
    ProjectComponent,
    ProjectStartComponent,
    HighlightDirective,
    PdfViewerComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [HeaderService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
