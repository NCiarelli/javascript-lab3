"use strict";
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// AddressBook Class: A class for storing and mainpulating an array of contacts of the Contact class
// Extended Challenge functions: filterByName, filterByRelation, clear, edit, listNames, deleteByName
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  // add: Adds a new Contact to the contacts array of AddressBook
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  // deleteAt: Removes a contact located at index in the contacts array.
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }

  // findByName - Has one parameter for name. Returns the first contact with the given name. Bonus: ignore case (capitalization). [use Array find]
  findByName(name) {
    let upperName = name.toUpperCase();
    let nameFindFunction = (contactToCheck) => {
      return upperName === contactToCheck.name.toUpperCase();
    }
    return this.contacts.find(nameFindFunction);

  }

  // filterByRelation: Returns an array of all the contacts that have that relation specified.
  filterByRelation(relation) {
    let filteredContacts = [];
    for (const contact of this.contacts) {
      if (contact.relation === relation) filteredContacts.push(contact);
    }
    return filteredContacts;
  }

  // clear: Remove all contacts
  clear() {
    // this.contacts = {};  // Does this create floating memory packets that take up space or do JavaScript handlers automatically garbage collect this?
    this.contacts.splice(0, this.contacts.length);
    // console.log(this.contacts);
  }

  // edit: Has five parameters: oldName, name, email, phone, relation. Replace the old contact with the given oldName, with the new values.
  edit(oldName, name, email, phone, relation) {
    for (const contact of this.contacts) {
      if (contact.name === oldName) {
        contact.name = name;
        contact.email = email;
        contact.phone = phone;
        contact.relation = relation;
      }
    }
  }

  // listNames - Return an array of just the names of all the contacts. This will be an array of strings.
  listNames() {
    let nameArray = [];
    for (const contact of this.contacts) {
      nameArray.push(contact.name);
    }
    return nameArray;
  }

  // deleteByName - Has one parameter for name. Delete the contact with the given name.
  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === name) {
        this.contacts.splice(i, 1);
        return;
      }
    }
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

function printNames(addressBookToPrint) {
  if (addressBookToPrint.contacts.length === 0) {
    console.log("The addressbook is empty.");
    return;
  } else {
    console.log("These are the names in this addressbook:");
    for (const contact of addressBookToPrint.contacts) {
      console.log(contact.name);
    }
  }
}

let addressBook = new AddressBook();
print(addressBook); // Test empty book check
addressBook.add("Max", "max.ciarelli@gmail.com", "313-333-6666", "Father");
addressBook.add("Dot", "dot.ciarelli@gmail.com", "313-555-7777", "Mother");
addressBook.add("Lady", "lady.ciarelli@gmail.com", "313-777-0000", "Sister");
addressBook.add("Oak", "oak.ciarelli@gmail.com", "313-999-3333", "Brother");

print(addressBook);

// Test deleteAt
// addressBook.deleteAt(2);

// print(addressBook);
// Test printNames
printNames(addressBook);
console.log("==================");
// Test findByName
console.log(addressBook.findByName("laDy"));

// Test filterByRelation
console.log(addressBook.filterByRelation("Sister"));

// // Test clear
// addressBook.clear();
// print(addressBook);

// Test edit
addressBook.edit(
  "Max",
  "Maximus",
  "maximus.ciarelli@gmail.com",
  "555-555-5555",
  "Brother"
);
print(addressBook);

// Test listNames
console.log(addressBook.listNames());

// Test deleteByName
addressBook.deleteByName("Lady");
print(addressBook);
