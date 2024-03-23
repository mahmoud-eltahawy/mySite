import { Routes } from '@angular/router';
import { WhoamiComponent } from './whoami/whoami.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExampleComponent } from './work-example/work-example.component';
import { FormalCvComponent } from './formal-cv/formal-cv.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path : "",component : HomeComponent},
  {path : "whoami",component : WhoamiComponent},
  {path : "skills",component : SkillsComponent},
  {path : "example",component : WorkExampleComponent},
  {path : "cv",component : FormalCvComponent},
];
