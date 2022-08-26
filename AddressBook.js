class Person {

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get lastName() {
    return this._lastName;
  }

  set address(address) {
    this._address = address;
  }

  get address() {
    return this._address;
  }

  set city(city) {
    this._city = city;
  }

  get city() {
    return this._city;
  }

  set state(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  set zip(zip) {
    this._zip = zip;
  }

  get zip() {
    return this._zip;
  }

  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set email(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  toString() {
    return ("{"
      + " firstName = " + this._firstName
      + ", lastName" + this._lastName
      + ", address" + this._address
      + ", city" + this._city
      + ", state" + this._state
      + ", zip" + this._zip
      + ", phoneNumber" + this._phoneNumber
      + ", email" + this._email
      + " }"
    );
  }
}

let addressbookList = new Map();

function addContact() {
  let adderssbookName = prompt("enter addressbookname")
  let person = createContact();

  if (addressbookList.has(adderssbookName)) {
    addressbookList.get(adderssbookName).set(person._name, person);
  } else {
    addressbookList.set(adderssbookName, (new Map().set(person._name, person)));
  }
  console.log("contact added succesfully..");
  console.log(person.toString());
}

function createContact() {
  let person = new Person();
  person._firstName = getUserInput(prompt("enter first name"), "^[A-Z][a-zA-Z]{2,}");
  person._lastName = getUserInput(prompt("enter last name"), "^[A-Z][a-zA-Z]{2,}");
  person._address = getUserInput(prompt("enter address"), "[a-zA-Z\w\d\s]{2,}"),
    person._city = getUserInput(prompt("enter city"), "[a-zA-Z\w\d\s]{2,}");
  person._state = getUserInput(prompt("enter state"), "[a-zA-Z\w\d\s]{2,}");
  person._zip = getUserInput(Number.parseInt(prompt("enter zip")), "[1-9]{6,}");
  person._phoneNumber = getUserInput(Number.parseInt(prompt("enter 10 digit phone number")), "[1-9]{10}");
  person._email = getUserInput(prompt("enter email"), "^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@([a-z1-9]+)([.][a-z]*)?(\.[a-z]{2,})$");
  console.log("contact created")
  return person;
}

function getUserInput(entery, regexPattern) {
  let regex = RegExp(regexPattern);
  if (regex.test(entery)) {
    return entery
  } else if (regex == "") {
    return entery
  } else {
    console.log("invalid input!");
    entery = prompt("enter valid input")
    getUserInput(entery, regexPattern);
  }
}

addContact();