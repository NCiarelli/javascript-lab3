"use strict";
// Address Book Lab
// Required: AddressBook Class, Contact class, print function

// Contact Class: A class for storing the name, email, phone, and relations of a contact in AddressBook
class Contact {
  constructor(nameParam, emailParam, phoneParam, relationParam) {
    this.name = nameParam;
    this.email = emailParam;
    this.phone = phoneParam;
    this.relation = relationParam;
  }
}

function capitalizeFirstLetter(stringParam) {
  return stringParam.charAt(0).toUpperCase() + stringParam.slice(1);
}
// AddressBook Class: A class for storing and mainpulating an array of contacts of the Contact class
// Extended Challenge functions: filterByName, filterByRelation, clear, edit, listNames, deleteByName
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  // add: Adds a new Contact to the contacts array of AddressBook
  add(nameParam, emailParam, phoneParam, relationParam) {
    let addedContact = new Contact(nameParam, emailParam, phoneParam, relationParam);
    this.contacts.push(addedContact);
  }

  // deleteAt: Removes a contact located at index in the contacts array.
  deleteAt(indexParam) {
    this.contacts.splice(indexParam, 1);
  }

  // findByName - Has one parameter for name. Returns the first contact with the given name. Bonus: ignore case (capitalization). [use Array find]
  findByName(nameParam) {
    let upperNameParam = nameParam.toUpperCase();
    let nameFindFunction = (contactElement) => {
      return upperNameParam === contactElement.name.toUpperCase();
    }
    return this.contacts.find(nameFindFunction);

  }

  // filterByRelation: Returns an array of all the contacts that have that relation specified.
  filterByRelation(relationParam) {
    return this.contacts.filter((contactElement) => contactElement.relation === relationParam);
  }

  // clear: Remove all contacts
  clear() {
    // this.contacts = {};  // Does this create floating memory packets that take up space or do JavaScript handlers automatically garbage collect this?
    this.contacts.splice(0, this.contacts.length);
    // console.log(this.contacts);
  }

  // edit: Has five parameters: oldName, name, email, phone, relation. Replace the old contact with the given oldName, with the new values.
  edit(oldNameParam, nameParam, emailParam, phoneParam, relationParam) {
    let oldContactIndex = this.contacts.findIndex((contactElement) => contactElement.name === oldNameParam);
    this.contacts[oldContactIndex] = new Contact(nameParam, emailParam, phoneParam, relationParam);
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
  deleteByName(nameParam) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === nameParam) {
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
