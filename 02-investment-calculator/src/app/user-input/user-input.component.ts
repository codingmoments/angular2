import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // enteredInitialInvestment = 0;
  // enteredAnnualInvestment = 0;
  // enteredExpectedReturn = 0;
  // enteredDuration = 0;

  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(0);
  enteredDuration = signal(0);

  // @Output() inputSubmit = new EventEmitter<InvestmentInput>();
  inputSubmit = output<InvestmentInput>();

  onSubmit() {
    this.inputSubmit.emit({
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    });

    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(0);
    this.enteredDuration.set(0);
  }
}
