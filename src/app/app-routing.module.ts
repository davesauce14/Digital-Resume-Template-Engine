import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SiteDetailsComponent } from './site-details/site-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: SummaryComponent},
  { path: 'experience', component: WorkExperienceComponent},
  { path: 'skills', component: EducationComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'personal', component: PersonalInfoComponent},
  { path: 'site-details', component: SiteDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
