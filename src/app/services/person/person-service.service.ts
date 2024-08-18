import { Injectable } from '@angular/core';
import { Person } from '../../pages/report/components/involved-persons/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public persons: Person[] = [new Person(1)];

  getPersons() {
    let result = this.persons.sort((a, b) => a.id - b.id);
    return result;
  }

  addPerson() {
    const ids = this.persons.map(person => person.id);
    
    let newId = 1;
    while (ids.includes(newId)) {
      newId++;
    }

    let person: Person = new Person(newId);
    this.persons.push(person);
  }

  removePerson(idToDel: number) {
    this.persons = this.persons.filter(p => p.id !== idToDel);
  }

  setCodeFor(id: number, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.code = value;
    }
  }

  setSexFor(id: number, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.sex = value;
    }
  }

  setBeltedFor(id: number, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.belted = value;
    }
  }

  setStatusFor(id: number, value: string) {
    const person = this.persons.find(p => p.id === id);
    if (person) {
        person.status = value;
    }
  }

  setFNameFor(id: number, value: string) {
  const person = this.persons.find(p => p.id === id);
    if (person) {
        person.firstName = value;
    }
  }

  setLNameFor(id: number, value: string) {
  const person = this.persons.find(p => p.id === id);
    if (person) {
        person.lastName = value;
    }
  }

  setAgeFor(id: number, value: string) {
  const person = this.persons.find(p => p.id === id);
    if (person) {
        person.age = value;
    }
  }
}
