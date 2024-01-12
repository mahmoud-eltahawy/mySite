import { Setter } from "solid-js";

export class Typist {
  private next_time: number;
  private miliseconds_between_letters : number;
  private static click = new Audio("click.mp3");
  private static shutter_click = new Audio("shutter-click.mp3");
  private static times_between_clicks = [70, 140, 180, 220];
  constructor(miliseconds : number) {
    this.next_time = 0;
    this.miliseconds_between_letters = miliseconds;
  }
  private what_and_when_to_speak(char: string): [number, HTMLAudioElement] {
    if (char === " ") {
      return [10, Typist.click];
    } else if (char === char.toUpperCase()) {
      return [this.miliseconds_between_letters, Typist.shutter_click];
    } else {
      return [
        Typist
          .times_between_clicks[
            new Date().getMilliseconds() % Typist.times_between_clicks.length
          ],
        Typist.click,
      ];
    }
  }

  display_sound(char: string) {
    const [time, sound] = this.what_and_when_to_speak(char);
    setTimeout(async () => {
      await sound.play();
    }, time);
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
        this.display_sound(str.charAt(i));
      }, this.letterTime(i) + this.previous_time());
    }
    //TODO display new line sound with last timeout
    this.next_time += str.length;
  }
}
