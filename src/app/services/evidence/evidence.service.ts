import { Injectable } from '@angular/core';
import { Exhibit } from './exhibit.model';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {

  constructor() { }

  private _exhibits: Exhibit[] = [];

  getNextId() {
    let last = this._exhibits.length;
    return last + 1;
  }

  addExhibit(exhibit: Exhibit) {
    this._exhibits.push(exhibit);
  }

  getExhibits() {
    return this._exhibits;
  }

  generateTitle(exhibit: Exhibit): string {
    const baseCharCode = 'A'.charCodeAt(0);
    let title = `EXHIBIT ${String.fromCharCode(baseCharCode + (exhibit.id - 1))}. ${exhibit.title.toUpperCase()}`;
    return title;
  }

  deleteExhibit(id: number) {
    this._exhibits = this._exhibits.filter(p => p.id !== id);
  }
}
