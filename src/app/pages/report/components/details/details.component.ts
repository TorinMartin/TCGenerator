import { Component } from '@angular/core';
import { DetailService } from '../../../../services/detail/detail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'report-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(public detailService: DetailService) { }

  onReportLocationChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportLocation = inputElement.value;
  }

  onReportDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportDate = inputElement.value;
  }

  onReportTimeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.detailService.reportTime = inputElement.value;
  }

}
