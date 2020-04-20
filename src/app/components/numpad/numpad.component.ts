import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss']
})
export class NumpadComponent {
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  @Output() sendDigit = new EventEmitter<number>();

}
