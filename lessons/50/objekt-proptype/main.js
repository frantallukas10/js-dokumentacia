// function createPerson(name, lastName) {
//   return {
//     name: name,
//     lastName: lastName,
//     fullname: function() {
//       console.log(`Volám sa ${this.name} ${this.lastName}`);
//     }
//   };
// }

// console.log(createPerson('David', 'Danko'));

function CreateStudent(name, lastName, role) {
  this.name = name;
  this.lastName = lastName;
  this.role = role;
}

const john = new CreateStudent('John', 'Dusi', 'student');

CreateStudent.prototype.school = null;
john.school = 'super duper školy';

console.log(john);
