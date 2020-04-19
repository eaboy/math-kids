import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Operation } from 'src/app/operations.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent {

  @Input() operation: Operation;
  @Input() result: number = null;
  @Output() solved = new EventEmitter<number>();

  constructor() { }

  solve() {
    this.solved.emit(this.result);
  }

}
