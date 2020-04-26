import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Operation, OperationResult } from 'src/app/operations.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnChanges {

  @Input() operation: Operation;
  @Input() result: number | null;
  @Input() showIcon: boolean;
  @Input() correct: boolean;
  @Input() secondsToNewOperation: number;
  @Output() solved = new EventEmitter<OperationResult>();
  overlayWidth = 0;

  constructor() { }

  ngOnChanges(change: SimpleChanges) {
    if (change.correct?.currentValue) {
      const interval = setInterval(() => {
        this.overlayWidth++;
        if (this.overlayWidth === 100) {
          clearInterval(interval);
          this.overlayWidth = 0;
        }
      }, this.secondsToNewOperation / 100 * 1000);
    }
  }

  solve() {
    const operationResult: OperationResult = { ...this.operation, result: this.result };
    this.solved.emit(operationResult);
  }

}
