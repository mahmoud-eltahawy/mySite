import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WhoamiComponent } from './whoami/whoami.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExampleComponent } from './work-example/work-example.component';
import { FormalCvComponent } from './formal-cv/formal-cv.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,WhoamiComponent,SkillsComponent,WorkExampleComponent,FormalCvComponent,HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angdemo';
}
