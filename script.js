// Address Book Lab
// Required: AddressBook Class, Contact class, print function

// Contact Class: A class for storing the name, email, phone, and relations of a contact in AddressBook
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

// AddressBook Class: A class for storing and mainpulating an array of contacts of the Contact class
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  // Adds a new Contact to the contacts array of AddressBook
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  // Removes a contact located at index in the contacts array.
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

function print(addressBookToPrint) {
  if (addressBookToPrint.contacts.length === 0) {
    console.log("The addressbook is empty.");
    return;
  } else {
    console.log("These are the contacts in this addressbook:");
    for (const contact of addressBookToPrint.contacts) {
      let printString = "";
      for (const key in contact) {
        printString += `${key}: ${contact[key]}`;
        printString.padEnd(25, " ");
      }
      console.log(printString);
    }
  }
}
