import { Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Typist } from '../utils/typist';
import { NgFor } from '@angular/common';


const c_services = ["desktop apps","web apps"]


@Component({
  selector: 'whoami',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './whoami.component.html',
})
export class WhoamiComponent implements OnInit {
  typist = new Typist(40)
  name = signal("")
  job = signal("")
  services_n = signal("")
  services = c_services.map((_) => signal(""));


  ngOnInit(): void {
    this.typist.type("my name is mahmoud gamal eltahawy",this.name)
    this.typist.type("a fullstack developer",this.job)
    this.typist.type("i can deliver : ",this.services_n)
    for(let i = 0; i < c_services.length;i++) {
      this.typist.type(c_services[i],this.services[i]);
    }
  }
}
const s = "hello world";

