import { Component } from '@angular/core';
import { GenerationService } from '../../services/generation/generation.service';
import { ToastrService } from 'ngx-toastr';
import { FooterComponent } from "./components/footer/footer.component";
import { EvidenceComponent } from "./components/evidence/evidence.component";
import { NarrativeComponent } from "./components/narrative/narrative.component";
import { InvolvedVehiclesComponent } from "./components/involved-vehicles/involved-vehicles.component";
import { InvolvedPersonsComponent } from "./components/involved-persons/involved-persons.component";
import { DetailsComponent } from "./components/details/details.component";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
  imports: [CommonModule, FooterComponent, EvidenceComponent, NarrativeComponent, InvolvedVehiclesComponent, InvolvedPersonsComponent, DetailsComponent, HeaderComponent]
})
export class ReportComponent {

  bbCodeSubject: string = "";
  bbCodeContent: string = "";
  isLoading: boolean = false;

  constructor(private _generationService: GenerationService, private _toastService: ToastrService) { }

  generate() {
    if (!this._generationService.validateDate()) {
      this._toastService.error('Use DD/MMM/YY', 'Invalid Date');
      return;
    }

    this.isLoading = true;
    this.bbCodeContent = "";
    this.bbCodeSubject = "";

    setTimeout(() => {
      this.bbCodeSubject = this._generationService.generateTitle();
      this.bbCodeContent = this._generationService.generate();
      this._toastService.success('Your report has been generated!', 'Success');
      this.isLoading = false;
    }, 200);
  }

  copyTitle() {
    if (this.bbCodeSubject === "") {
      this._toastService.error('Generate a report first.', 'Nothing To Copy');
    }
    else {
      navigator.clipboard.writeText(this.bbCodeSubject).then(
        () => this._toastService.info('Report subject copied.', 'Copied Subject'),
        () => this._toastService.info('Unable to copy report subject!', 'Error')
      );
    }
  }

  copyBody() {
    if (this.bbCodeContent === "") {
      this._toastService.error('Generate a report first.', 'Nothing To Copy');
    }
    else {
      navigator.clipboard.writeText(this.bbCodeContent).then(
        () => this._toastService.info('Report BBCode copied.', 'Copied BBCode'),
        () => this._toastService.info('Unable to copy report content', 'Error')
      );
    }
  }
}
