
/**
*the class responsible for typing letter by letter
*@class
*@constructor
*@public
*/
export class Typist {
  /**
  *@type {number}next_time
  */
  next_time;
  /**
  *@type {number} 
  */
  miliseconds_between_letters;
  /**
  *@param {number}miliseconds
  */
  constructor(miliseconds) {
    this.next_time = 0;
    this.miliseconds_between_letters = miliseconds;
  }
  /**
  *@param {number}i
  *@returns {number}
  */
  letterTime(i) {
    return i * this.miliseconds_between_letters;
  }
  /**
  *@returns {number}
  */
  previous_time() {
    if (this.next_time) {
      return this.letterTime(this.next_time);
    } else {
      return 0;
    }
  }
  /**
  *@param {string}str
  *@param {import("solid-js").Setter<string>}set_str
  */
  type(
    str,
    set_str,
  ) {
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => {
        set_str((x) => x + str.charAt(i));
      }, this.letterTime(i) + this.previous_time());
    }
    this.next_time += str.length;
  }
}
