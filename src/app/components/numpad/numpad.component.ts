import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss']
})
export class NumpadComponent {
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  @Input() disableBackSpace: boolean;
  @Output() sendDigit = new EventEmitter<number>();
  @Output() deleteDigit = new EventEmitter<boolean>();

}
