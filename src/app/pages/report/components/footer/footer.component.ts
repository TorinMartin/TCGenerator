import { Component } from '@angular/core';
import { DetailService } from '../../../../services/detail/detail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'report-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public detailService: DetailService) { }

  onReportPreparedByChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportPreparedBy = inputElement.value;
  }

  onReportEmployeeNumberChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportEmployeeNum = inputElement.value;
  }

  onReportStationUnitChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportStationUnit = inputElement.value;
  }

  onReportUnitCarChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportUnitCar = inputElement.value;
  }

}
