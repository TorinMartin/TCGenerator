import { Component } from '@angular/core';
import { DetailService } from '../../../../services/detail/detail.service';

@Component({
  selector: 'report-narrative',
  standalone: true,
  imports: [],
  templateUrl: './narrative.component.html',
  styleUrl: './narrative.component.css'
})
export class NarrativeComponent {

  constructor(private _detailService: DetailService) { }

  onReportNarrativeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this._detailService.reportNarrative = inputElement.value;
  }

}
