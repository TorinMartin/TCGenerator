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
    this.bbCodeContent = '';
    this.bbCodeSubject = '';
    setTimeout(() => {
      this.bbCodeSubject = this._generationService.generateTitle();
      this.bbCodeContent = this._generationService.generate();
      this.toastr.success('Your report has been generated!', 'Success');
      this.isLoading = false;
    }, 200);
  }
}
