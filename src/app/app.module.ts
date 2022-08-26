import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ReferencesComponent } from './references/references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CarousalComponent } from './carousal/carousal.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ReferencesComponent,
    HomeComponent,
    ProfileEditorComponent,
    CarousalComponent,
    LoginComponent,
    PrivateComponent,
    ApiComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',redirectTo:'home', pathMatch:'full'}
    ]),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent],
  exports: [RouterModule]
})
export class AppModule { }
