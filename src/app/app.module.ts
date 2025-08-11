import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { CertificationComponent } from './certification/certification.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ProfileNavbarComponent,
    AboutMeComponent,
    HomeComponent,
    ExperienceComponent,
    SkillComponent,
    CertificationComponent,
    FooterComponent,
    ContactMeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
