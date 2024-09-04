import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DetailService } from '../../../../services/detail/detail.service';

@Component({
  selector: 'report-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, NgbAlertModule, NgbDatepickerModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly typeOptions: string[] = ['TC', 'DITC'];
  selectedType: string = this.typeOptions[0];

  constructor(public detailService: DetailService) { }

  selectType(option: string) {
    this.selectedType = option;
    this.detailService.reportType = option;
  }

  onTitleDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportTitleDate = inputElement.value;
  }

  onDateSelect(ngbDate: NgbDateStruct): void {
    this.detailService.setTitleDate(ngbDate);
  }

}
