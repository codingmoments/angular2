import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  @ViewChild(ButtonComponent) button?: ElementRef<ButtonComponent>;

  @ViewChildren(ControlComponent) controls?: QueryList<ElementRef<ControlComponent>>[];

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    console.dir(this.form);

    this.form?.nativeElement.reset();

    if (this.controls) {
      this.controls.forEach((control) => {
        console.log(control);
      });
    }
  }
}
