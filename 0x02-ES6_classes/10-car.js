export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  get brand() {
    return this._brand;
  }

  get color() {
    return this._color;
  }

  get motor() {
    return this._motor;
  }

  cloneCar() {
    return new this.constructor();
  }
}
