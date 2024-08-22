import { Component, QueryList, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Exhibit } from '../../../../../services/evidence/exhibit.model';
import { EvidenceService } from '../../../../../services/evidence/evidence.service';
import { Evidence } from '../../../../../services/evidence/evidence.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-evidence-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './evidence-modal.component.html',
  styleUrl: './evidence-modal.component.css'
})
export class EvidenceModalComponent {

  public isSpoiler: boolean = true;
  inputs: { id: number, type: string }[] = [];

  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef>;
  @ViewChild('exhibitTitle') exhibitTitle!: ElementRef;

  constructor(private _modalService: NgbModal, private _evidenceService: EvidenceService, private _toastService: ToastrService) { }

  close() {
    this._modalService.dismissAll();
  }

  addImageInput() {
    this.inputs.push({id: this.getNextId(), type: "image"});
  }

  addDoInput() {
    this.inputs.push({id: this.getNextId(), type: "do"});
  }

  addTextInput() {
    this.inputs.push({id: this.getNextId(), type: "text"});
  }

  getNextId(): number {
    let last = this.inputs.length;
    return last + 1;
  }

  removeInput(idToDel: number) {
    this.inputs = this.inputs.filter(i => i.id !== idToDel);
  }

  addExhibit() {
    const title = this.exhibitTitle.nativeElement.value;

    let evidence: Evidence[] = [];
    let isValid: boolean = true;

    if (this.inputElements.length === 0) {
      this._toastService.error('Exhibit evidence required.', 'Empty Exhibit');
      isValid = false;
    }

    this.inputElements.forEach((inputEl, index) => {
      const id = this.inputs[index];
      const value = inputEl.nativeElement.value;
      const type = this.inputs[index].type;

      if (type === "image" && !this.isImageUrl(value)) {
        this._toastService.error('Valid image URL required.', 'Invalid URL');
        isValid = false;
      }
      else if (type === "do" && value.trim() === "") {
        this._toastService.error('/do cannot be blank.', 'Invalid /do');
        isValid = false;
      }

      evidence.push(new Evidence(type, value));
    });

    if (!isValid) return;

    let exhibit = new Exhibit(this._evidenceService.getNextId(), title, this.isSpoiler, evidence);
    this._evidenceService.addExhibit(exhibit);

    this._modalService.dismissAll();
  }

  isImageUrl(url: string): boolean {
    const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;
    return imageExtensions.test(url);
  }

  getAddingChar(): string {
    let id = this._evidenceService.getNextId();
    return this._evidenceService.getCharCode(id);
  }
}
