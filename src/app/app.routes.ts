import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./credit-simulator/credit-simulator.component')
        .then(m => m.CreditSimulatorComponent),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./credit-success/credit-success.component')
        .then(m => m.CreditSuccessComponent),
  },
];
