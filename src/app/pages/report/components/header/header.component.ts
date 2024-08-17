import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'report-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly typeOptions: string[] = ['TC', 'DITC'];
  selectedType: string = this.typeOptions[1];

  selectType(option: string) {
    this.selectedType = option;
  }
}
