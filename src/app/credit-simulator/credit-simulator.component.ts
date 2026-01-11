import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-credit-simulator',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './credit-simulator.component.html',
  styleUrls: ['./credit-simulator.component.scss'],
})
export class CreditSimulatorComponent {
  loading = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      limit: [null, [Validators.required, Validators.min(1000)]],
    });
  }

  hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  simulate(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    of(this.form.value)
      .pipe(delay(1500))
      .subscribe(() => {
        this.loading = false;
        this.router.navigateByUrl('/success');
      });
  }
}
