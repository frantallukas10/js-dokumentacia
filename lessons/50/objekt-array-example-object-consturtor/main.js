function Student(name, lastName, rola) {
  this.name = name;
  this.lastName = lastName;
  this.rola = rola;
}

Student.prototype.school = 'tuke';
Student.prototype.ahoj = function() {
  console.log(
    `ahoj, ja som ${this.name} ${this.lastName} ${this.rola} ${this.school}`
  );
};

const janko = new Student('Janko', 'Traktorista', 'student');
const ferko = new Student('Ferko', 'Traktorista', 'student');

console.log(janko);
console.log(janko.constructor);
console.log(janko.constructor.prototype);
console.log(Object.getPrototypeOf(janko)); // to iste ako console.log(janko.constructor.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(janko)));

const list = [];
console.log(list.constructor);
console.log(Object.getPrototypeOf(list));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(list))); // to iste ako console.log(Object.getPrototypeOf(Object.getPrototypeOf(janko)));
