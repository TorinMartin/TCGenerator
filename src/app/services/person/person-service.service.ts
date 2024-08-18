import { Injectable } from '@angular/core';
import { Person } from '../../pages/report/components/involved-persons/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public persons: Person[] = [new Person("D1")];

  getPersons() {
    //let result = this.persons.sort((a, b) => a.id[a.id] - b.id);
    return this.persons;
  }

  addPerson() {
    let id = this.getNextId("D");

    let person: Person = new Person(id);
    this.persons.push(person);
  }

  getNextId(prefix: string): string {
    const filteredIds = this.persons
      .filter(p => p.id.startsWith(prefix))
      .map(p => parseInt(p.id.replace(prefix, ''), 10))
      .sort((a, b) => a - b);
  
    let newId = 1;
    for (let i = 0; i < filteredIds.length; i++) {
      if (filteredIds[i] !== newId) {
        break;
      }
      newId++;
    }
  
    return `${prefix}${newId}`;
  }

  removePerson(idToDel: string) {
    this.persons = this.persons.filter(p => p.id !== idToDel);
  }

  setIdFor(id: string, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.id = value;
    }
  }

  setSexFor(id: string, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.sex = value;
    }
  }

  setBeltedFor(id: string, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.belted = value;
    }
  }

  setStatusFor(id: string, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.status = value;
    }
  }

  setFNameFor(id: string, value: string) {
  const person = this.persons.find(p => p.id === id);
    if (person) {
        person.firstName = value;
    }
  }

  setLNameFor(id: string, value: string) {
  const person = this.persons.find(p => p.id === id);
    if (person) {
        person.lastName = value;
    }
  }

  setAgeFor(id: string, value: string) {
  const person = this.persons.find(p => p.id === id);
    if (person) {
        person.age = value;
    }
  }
}
