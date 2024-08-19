import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'
import { GenerationService } from '../../services/generation/generation.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  bbCodeContent: string = "";

  constructor(private _generationService: GenerationService) { }

  generate() {
    this.bbCodeContent = this._generationService.generate();
  }
}
