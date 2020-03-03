class Person {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(date);
  }

  ahoj() {
    return `ahoj ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
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
  }
}

const janko = new Person('janko', 'hrasko', '10-10-90');

console.log(janko.calculateAge());
