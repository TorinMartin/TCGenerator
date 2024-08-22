import { Injectable } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {

  constructor() { }

  private _exhibits: Exhibit[] = [];

  getNextId(): number {
    const filteredIds = this._exhibits.map(e => e.id).sort((a, b) => a - b);
  
    let newId = 1;
    for (let i = 0; i < filteredIds.length; i++) {
      if (filteredIds[i] !== newId) {
        break;
      }
      newId++;
    }
  
    return newId;
  }

  addExhibit(exhibit: Exhibit) {
    this._exhibits.push(exhibit);
  }

  getExhibits() {
    return this._exhibits;
  }

  generateTitle(exhibit: Exhibit): string {
    
    let title = `EXHIBIT ${this.getCharCode(exhibit.id)}. ${exhibit.title.toUpperCase()}`;
    return title;
  }

  getCharCode(id: number): string
  {
    const baseCharCode = 'A'.charCodeAt(0);
    return String.fromCharCode(baseCharCode + (id - 1));
  }

  deleteExhibit(id: number) {
    this._exhibits = this._exhibits.filter(p => p.id !== id);
  }
}
