import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  viewChild,
  ViewChild,
  viewChildren,
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @ViewChild(ButtonComponent) button?: ElementRef<ButtonComponent>;
  private button = viewChild<ButtonComponent>(ButtonComponent);

  // @ViewChildren(ControlComponent) controls?: QueryList<ElementRef<ControlComponent>>[];
  private controls = viewChildren(ControlComponent);

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    console.dir(this.form?.nativeElement);
    console.dir(this.button());
    console.dir(this.controls());

    this.form?.nativeElement.reset();

    if (this.controls) {
      this.controls().forEach((control) => {
        console.log(control);
      });
    }
  }

  ngOnInit(): void {
    console.log('AFTER INIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }
}
