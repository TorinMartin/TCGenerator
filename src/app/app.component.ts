import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportModule } from "./pages/report/report.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReportModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TC-Generator';
}
