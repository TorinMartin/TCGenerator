import { Injectable } from '@angular/core';
import { Person } from '../../pages/report/components/involved-persons/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public persons: Person[] = [new Person(1)];

  addPerson() {
    let last = this.persons[this.persons.length - 1]?.id ?? 0;
    let person: Person = new Person(last + 1);
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
