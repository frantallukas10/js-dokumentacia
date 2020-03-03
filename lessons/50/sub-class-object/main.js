class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  ahoj() {
    // tato funkcia je publick je dostupna pomocou in3tancie objektu
    return `ahoj ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    // privatna funkcia ktora sa neda volat z vonku pomocou inštancie objektu
    return 900;
  }
}

const janko = new Customer('Janko', 'Traktorista', '555-555-5555', 'Standard');

console.log(janko);
console.log(janko.ahoj()); // da sa zavolat
console.log(janko.getMembershipCost()); // neda sa zavolat
