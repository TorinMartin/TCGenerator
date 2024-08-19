import { Component } from '@angular/core';
import { DetailService } from '../../../../services/detail/detail.service';

@Component({
  selector: 'report-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private _detailService: DetailService) { }

  onReportLocationChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportLocation = inputElement.value;
  }

  onReportDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportDate = inputElement.value;
  }

  onReportTimeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportTime = inputElement.value;
  }

}
