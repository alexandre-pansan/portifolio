import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SectionFirstComponent } from './components/main/section-first/section-first.component';
import { SectionAboutComponent } from './components/main/section-about/section-about.component';
import { SectionProjectsComponent } from './components/main/section-projects/section-projects.component';
import { SectionContactComponent } from './components/main/section-contact/section-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SectionFirstComponent,
    SectionAboutComponent,
    SectionProjectsComponent,
    SectionContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
