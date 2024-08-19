import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenerationService } from '../../services/generation/generation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  bbCodeSubject: string = "";
  bbCodeContent: string = "";
  isLoading: boolean = false;

  constructor(private _generationService: GenerationService, private toastr: ToastrService) { }

  generate() {
    this.isLoading = true;
    this.bbCodeContent = "";
    this.bbCodeSubject = "";
    setTimeout(() => {
      this.bbCodeSubject = this._generationService.generateTitle();
      this.bbCodeContent = this._generationService.generate();
      this.toastr.success('Your report has been generated!', 'Success');
      this.isLoading = false;
    }, 200);
  }

  copyTitle() {
    if (this.bbCodeSubject === "") {
      this.toastr.error('Generate a report first.', 'Nothing To Copy');
    }
    else {
      navigator.clipboard.writeText(this.bbCodeSubject).then(
        () => this.toastr.info('Report subject copied.', 'Copied Subject'),
        () => this.toastr.info('Unable to copy report subject!', 'Error')
      );
    }
  }

  copyBody() {
    if (this.bbCodeContent === "") {
      this.toastr.error('Generate a report first.', 'Nothing To Copy');
    }
    else {
      navigator.clipboard.writeText(this.bbCodeContent).then(
        () => this.toastr.info('Report BBCode copied.', 'Copied BBCode'),
        () => this.toastr.info('Unable to copy report content', 'Error')
      );
    }
  }
}
