import { Component, inject, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investementService = inject(InvestmentService);

  get annualData() {
    return this.investementService.annualData();
  }
}
