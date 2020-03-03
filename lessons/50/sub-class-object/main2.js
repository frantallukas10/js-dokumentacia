class Kalkulacka {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  spocitaj(spocitajNum1, spocitajNum2) {
    return spocitajNum1 + spocitajNum2;
  }
  odpocitaj() {
    return this.num1 - this.num2;
  }
}

const calc = new Kalkulacka(3, 5);

console.log(calc.spocitaj(5, 5));
console.log(calc.odpocitaj());
