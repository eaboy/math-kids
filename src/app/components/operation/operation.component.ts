import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent {

  @Input() firstNumber: number;
  @Input() secondNumber: number;
  @Input() result: number = null;
  @Input() operationSign: string;
  @Output() solved = new EventEmitter<number>();

  constructor() { }

  solve() {
    this.solved.emit(this.result);
  }

}
