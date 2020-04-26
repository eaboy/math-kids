import { Component, OnInit } from '@angular/core';
import { Operation, OperationsService, OperationConfiguration, OperationResult } from '../operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  operation: Operation;
  solution: number | null = null;
  showIcon = false;
  correct: boolean;
  secondsToNewOperation = 3;

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.newOperation();
  }

  onSolved(operationResult: OperationResult) {
    this.showIcon = true;
    this.correct = this.operationService.checkResult(operationResult);
    if (this.correct) {
      setTimeout(this.newOperation, this.secondsToNewOperation * 1000);
    }
  }

  onDigitSent(digit: number) {
    this.showIcon = false;
    let solutionString: string = this.solution ? this.solution.toString() : '';
    solutionString += digit;
    this.solution = parseInt(solutionString, 10);
  }

  onDeletedDigit() {
    this.solution = parseInt(this.solution.toString().slice(0, -1), 10) || null;
  }

  private newOperation = () => {
    this.showIcon = false;
    this.solution = null;
    this.correct = false;
    const additionConfiguration: OperationConfiguration = {
      limit: 10,
      minValue: 1
    };
    this.operation = this.operationService.newAddition(additionConfiguration);
  }

}
