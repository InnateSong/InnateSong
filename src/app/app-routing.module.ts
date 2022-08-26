import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references/references.component';

const routes: Routes = [
  {path: "references", component: ReferencesComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component:LoginComponent},
  {path:"private",component:PrivateComponent},
  {path: "api", component:ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
