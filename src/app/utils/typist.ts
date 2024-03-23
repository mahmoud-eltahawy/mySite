import { WritableSignal } from "@angular/core";

export class Typist {
  private type_letters_number = 0;
  private miliseconds_between_letters = 0;
  private begin_after = 0;

  constructor(miliseconds : number,begin = 0) {
    this.type_letters_number = 0;
    this.miliseconds_between_letters = miliseconds;
    this.begin_after = begin;
  }
  private calculateNTime(n : number) {
    return n * this.miliseconds_between_letters;
  }
  private calculateNextTime(n : number) {
    return this.calculateNTime(this.begin_after) + this.calculateNTime(n) + this.previous_time();
  }
  private previous_time() {
    if (this.type_letters_number) {
      return this.calculateNTime(this.type_letters_number);
    } else {
      return 0;
    }
  }
  type(
    str : string,
    write_signal : WritableSignal<string>,
  ) {
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => {
        write_signal.update((x) => x + str.charAt(i));
      }, this.calculateNextTime(i));
    }
    this.type_letters_number += str.length;
    return this.previous_time();
  }
}
