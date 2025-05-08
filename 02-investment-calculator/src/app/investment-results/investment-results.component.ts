import { Component, computed, inject, input, Input } from '@angular/core';
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

  // annualData is still a signal. It does not return the WriteableSignal
  // from the investementService. It returns a computed read-only signal.
  // With this pattern, you therefore make sure that you do not accidentally
  // change the data managed by the service outside the service.
  annualData = computed(() => this.investementService.annualData());
  // Alternative solution
  // asReadOnly() gives you read-only version of the signal
  // annualData1 = this.investementService.annualData.asReadonly();
}
