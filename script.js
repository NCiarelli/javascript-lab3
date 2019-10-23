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
        let tempString = "";
        tempString += `${key}: ${contact[key]} `;
        tempString = tempString.padEnd(25);
        printString += tempString;
      }
      console.log(printString);
    }
  }
}

let addressBook = new AddressBook();
addressBook.add("Max", "max.ciarelli@gmail.com", "313-333-6666", "Father");
addressBook.add("Dot", "dot.ciarelli@gmail.com", "313-555-7777", "Mother");
addressBook.add("Lady", "lady.ciarelli@gmail.com", "313-777-0000", "Sister");
addressBook.add("Oak", "oak.ciarelli@gmail.com", "313-999-3333", "Brother");

addressBook.deleteAt(2);

print(addressBook);
