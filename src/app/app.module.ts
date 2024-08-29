import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsService } from './services/projects.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ExpComponent } from './experience/exp/exp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpsectionComponent } from './dashboard/expsection/expsection.component';
import { MessagessectionComponent } from './dashboard/messagessection/messagessection.component';
import { EduSectionComponent } from './dashboard/edusection/edu.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ExperienceComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectComponent,
    ExpComponent,
    AboutComponent,
    DashboardComponent,
    ExpsectionComponent,
    MessagessectionComponent,
    EduSectionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
