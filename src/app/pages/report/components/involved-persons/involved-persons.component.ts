import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'report-involved-persons',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './involved-persons.component.html',
  styleUrl: './involved-persons.component.css'
})
export class InvolvedPersonsComponent {
  readonly codeOptions: string[] = ['D', 'P', 'W', 'PED'];
  readonly sexOptions: string[] = ['M', 'F'];
  readonly beltedOptions: string[] = ['Y', 'N'];
  readonly statusOptions: string[] = ['UNHARMED', 'INJURED', 'SEVERELY INJURED', 'DECEASED'];
  selectedCode: string = this.codeOptions[0];
  selectedSex: string = this.sexOptions[0];
  selectedBelted: string = this.beltedOptions[0];
  selectedStatus: string = this.statusOptions[0];

  selectCode(option: string) {
    this.selectedCode = option;
  }

  selectSex(option: string) {
    this.selectedSex = option;
  }

  selectBelted(option: string) {
    this.selectedBelted = option;
  }

  selectStatus(option: string) {
    this.selectedStatus = option;
  }
}
