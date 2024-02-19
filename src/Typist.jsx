/**
 * the class responsible for typing letter by letter
 * @class
 * @constructor
 * @public
 */
export class Typist {
  /**
   * @type {number}next_time
   */
  #type_letters_number;
  /**
   * @type {number}
   */
  #miliseconds_between_letters;
  /**
   * @param {number}miliseconds
   */
  constructor(miliseconds) {
    this.#type_letters_number = 0;
    this.#miliseconds_between_letters = miliseconds;
  }
  /**
   * @param {number}n
   * @returns {number}
   */
  #calculateNTime(n) {
    return n * this.#miliseconds_between_letters;
  }
  /**
   * @param {number}n
   * @returns {number}
   */
  #calculateNextTime(n) {
    return this.#calculateNTime(n) + this.#previous_time();
  }
  /**
   * @returns {number}
   */
  #previous_time() {
    if (this.#type_letters_number) {
      return this.#calculateNTime(this.#type_letters_number);
    } else {
      return 0;
    }
  }
  /**
   * @param {string}str
   * @param {import("solid-js").Setter<string>}set_str
   * @returns {number}
   */
  type(
    str,
    set_str,
  ) {
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => {
        set_str((x) => x + str.charAt(i));
      }, this.#calculateNextTime(i));
    }
    this.#type_letters_number += str.length;
    return this.#previous_time();
  }
}
