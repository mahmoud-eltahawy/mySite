import { Setter } from "solid-js";

export class Typist {
  private store: number[];
  private click = new Audio("click.mp3");
  private shutter_click = new Audio("shutter-click.mp3");
  constructor() {
    this.store = [0];
  }

  async display_sound(i: number) {
    if (i % 4 === 0) {
      await this.click.play();
    } else {
      await this.shutter_click.play();
    }
  }

  private letterTime(i: number): number {
    return i * 100;
  }
  private prev_length(): number {
    return this.store.reduce((acc, x) => acc + x);
  }
  private previous_time(): number {
    if (this.prev_length() === 0) {
      return 0;
    } else {
      return this.letterTime(this.prev_length());
    }
  }

  type(
    str: string,
    set_str: Setter<string>,
  ) {
    console.log(`
        name : ${str}
        this time : ${this.letterTime(str.length)}
        previous length : ${this.previous_time()}
        total time : ${this.letterTime(str.length) + this.previous_time()} 
        `);
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => {
        set_str((x) => x + str.charAt(i));
        this.display_sound(i);
      }, this.letterTime(i) + this.previous_time());
    }
    this.store.push(str.length);
  }
}
