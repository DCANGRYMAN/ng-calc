import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-credit-simulator',
  standalone: true,
  imports: [NgIf],
  templateUrl: './credit-simulator.component.html',
  styleUrl: './credit-simulator.component.scss',
})
export class CreditSimulatorComponent {
  simulateCredit() {
    return of({
      status: 'PRE_APPROVED',
      limit: 8500,
    }).pipe(delay(1200));
  }
}
