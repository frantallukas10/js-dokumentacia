function createPerson(name, lastName) {
  return {
    name: name,
    lastName: lastName,
    fullname: function() {
      console.log(`Volám sa ${this.name} ${this.lastName}`);
    }
  };
}

console.log(createPerson('David', 'Danko'));

function CreateStudent(name, lastName, role) {
  this.name = name;
  this.lastName = lastName;
  this.role = role;
}

const john = new CreateStudent('John', 'Dusi', 'student');

CreateStudent.prototype.school = null;
john.school = 'super duper školy';

console.log(john);

console.log('-------------------------------------');

function Clovek(firstName, lastName, date) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(date);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

Clovek.prototype.calculateAge = function() {
  const ageDate = this.birthday;
  const personMonth = ageDate.getMonth();
  const actualMonth = new Date().getMonth();
  // ak je mesiac cloveka väčší ako mesiac aktualny
  if (personMonth > actualMonth) {
    // 1990 - 2020 = -30 + 1 = | -29 | = 29
    return Math.abs(ageDate.getFullYear() - 2020 + 1);
  } else {
    // 1990 - 2020 = | -30 | = 30
    return Math.abs(ageDate.getFullYear() - 2020);
  }
};

Clovek.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const janko = new Clovek('janko', 'hrasko', '10-10-90');
const ferko = new Clovek('ferko', 'traktorista', 'October 10 1990');

console.log(ferko);
console.log(janko.calculateAge());
console.log(ferko.getFullName());
