import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from '../../../../services/detail/detail.service';

@Component({
  selector: 'report-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly typeOptions: string[] = ['TC', 'DITC'];
  selectedType: string = this.typeOptions[0];

  constructor(private _detailService: DetailService) { }

  selectType(option: string) {
    this.selectedType = option;
    this._detailService.reportType = option;
  }

  onReportNumberChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportNumber = inputElement.value;
  }
}
