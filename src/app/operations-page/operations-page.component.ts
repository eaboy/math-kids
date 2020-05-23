import { Component, OnInit } from '@angular/core';
import { Operation, OperationsService, OperationResult, OperationConfiguration, OperationType } from '../operations.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-operations-page',
  templateUrl: './operations-page.component.html',
  styleUrls: ['./operations-page.component.scss']
})
export class OperationsPageComponent implements OnInit {
  operation: Operation;
  solution: number | null = null;
  showIcon = false;
  isCorrect: boolean;
  secondsToNewOperation = this.statusService.operationPageConfiguration.secondsToNewOperation;
  isSuccess = false;
  showVisualHelp = this.statusService.operationPageConfiguration.showVisualHelp;

  constructor(private operationService: OperationsService, private statusService: StatusService) { }

  ngOnInit() {
    this.newOperation();
  }

  onSolved(operationResult: OperationResult) {
    this.isCorrect = this.operationService.checkResult(operationResult);
    this.showIcon = true;
    if (this.isCorrect) {
      this.statusService.operationPageConfiguration.totalOperations--;
      if (this.statusService.operationPageConfiguration.totalOperations) {
        setTimeout(this.newOperation, this.secondsToNewOperation * 1000);
      } else {
        this.isSuccess = true;
      }
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
    this.isCorrect = false;
    const operationConfiguration: OperationConfiguration = {
      limit: this.statusService.operationPageConfiguration.maxOperatorValue,
      minValue: 1,
      operationType: this.statusService.operationPageConfiguration.operationType
    };
    this.operation = this.operationService.newOperation(operationConfiguration);
  }

}
