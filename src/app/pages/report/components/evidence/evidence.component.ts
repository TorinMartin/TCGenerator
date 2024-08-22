import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EvidenceModalComponent } from './evidence-modal/evidence-modal.component';
import { EvidenceService } from '../../../../services/evidence/evidence.service';
import { Exhibit } from '../../../../services/evidence/exhibit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'report-evidence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evidence.component.html',
  styleUrl: './evidence.component.css'
})
export class EvidenceComponent {

  constructor(private _modalService: NgbModal, private _evidenceService: EvidenceService) { }

  openModal() {
    this._modalService.open(EvidenceModalComponent);
  }

  getExhibits(): Exhibit[] {
    return this._evidenceService.getExhibits().sort((a, b) => a.id - b.id);
  }

  generateExhibitTitle(exhibit: Exhibit): string {
    return this._evidenceService.generateTitle(exhibit);
  }

  removeExhibit(id: number) {
    this._evidenceService.deleteExhibit(id);
  }
  
}
