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

  // filterByName: Returns the first contact with the given name
  filterByName(name) {
    for (const contact of this.contacts) {
      if (contact.name === name) return contact;
    }
    return null;
  }

  // filterByRelation: Returns an array of all the contacts that have that relation specified.
  filterByRelation(relation) {
    filteredContacts = {};
    for (const contact of this.contacts) {
      if (contact.relation === relation) filteredContacts.push(contact);
    }
    return filteredContacts;
  }

  // clear: Remove all contacts
  clear() {
    // this.conatacts = {};  // Does this create floating memory packets that take up space or do JavaScript handlers automatically garbage collect this?
    this.contacts.splice(0, this.contacts.length);
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
    nameArray = {};
    for (const contact of this.contacts) {
      nameArray.push(contact.name);
    }
    return nameArray;
  }

  // deleteByName - Has one parameter for name. Delete the contact with the given name.
  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contacts[i].name === name) {
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

addressBook.deleteAt(2);

print(addressBook);

printNames(addressBook);
