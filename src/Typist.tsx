import { Setter } from "solid-js";

export class Typist {
  private next_time: number;
  private miliseconds_between_letters: number;
  constructor(miliseconds: number) {
    this.next_time = 0;
    this.miliseconds_between_letters = miliseconds;
  }

  private letterTime(i: number): number {
    return i * this.miliseconds_between_letters;
  }
  private previous_time(): number {
    if (this.next_time) {
      return this.letterTime(this.next_time);
    } else {
      return 0;
    }
  }

  type(
    str: string,
    set_str: Setter<string>,
  ) {
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => {
        set_str((x) => x + str.charAt(i));
      }, this.letterTime(i) + this.previous_time());
    }
    this.next_time += str.length;
  }
}
