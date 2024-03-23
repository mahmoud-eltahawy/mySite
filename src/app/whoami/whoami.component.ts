import { Component, OnInit, signal,WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Typist } from '../utils/typist';

@Component({
  selector: 'whoami',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './whoami.component.html',
})
export class WhoamiComponent implements OnInit {
  content : WritableSignal<string> = signal<string>("")
  typist = new Typist(40)

  ngOnInit(): void {
    this.typist.type(s,this.content);
  }
}
const s = "hello world";

