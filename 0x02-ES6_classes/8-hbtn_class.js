export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('size must be a Number');
    }
    this._location = value;
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
