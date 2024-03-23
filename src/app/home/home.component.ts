import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Typist } from '../utils/typist';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  typist= new Typist(50,10);
  whoami = signal("$> ")
  skills = signal("")
  examples = signal("")
  cv = signal("")

  ngOnInit(): void {
    this.typist.type("whoami",this.whoami)
    this.typist.type("my skills",this.skills)
    this.typist.type("work example",this.examples)
    this.typist.type("formal cv",this.cv)
  }

}
