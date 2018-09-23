class SmartCalculator {
  constructor(initialValue) {
    // your implementationthis.initialValue = initialValue;
    this.initialValue = initialValue;
  }

  add(number) {
    // your implementation
    this.initialValue += ' + ' + number;
    return this;
  }

  subtract(number) {
    // your implementation
    this.initialValue += ' - ' + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.initialValue += ' * ' + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.initialValue += ' / ' + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.initialValue += ' ** ' + number;
    return this;
  }

  valueOf() {
    return eval(this.initialValue);
  }
}

module.exports = SmartCalculator;
