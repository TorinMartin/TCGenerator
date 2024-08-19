import { Component } from '@angular/core';
import { DetailService } from '../../../../services/detail/detail.service';

@Component({
  selector: 'report-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private _detailService: DetailService) { }

  onReportPreparedByChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportPreparedBy = inputElement.value;
  }

  onReportEmployeeNumberChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportEmployeeNum = inputElement.value;
  }

  onReportStationUnitChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportStationUnit = inputElement.value;
  }

  onReportUnitCarChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportUnitCar = inputElement.value;
  }

}
