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

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    const additionConfiguration: OperationConfiguration = {
      limit: 10,
      minValue: 1
    };
    this.operation = this.operationService.newAddition(additionConfiguration);
  }

  onSolved(operationResult: OperationResult) {
    console.log(this.operationService.checkResult(operationResult));
  }

  onDigitSent(digit: number) {
    let solutionString: string = this.solution ? this.solution.toString() : '';
    solutionString += digit;
    this.solution = parseInt(solutionString, 10);
  }

}
