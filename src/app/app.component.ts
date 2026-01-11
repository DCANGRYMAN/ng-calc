import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditSimulatorComponent } from "./credit-simulator/credit-simulator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditSimulatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-calc';
}
