import { Injectable } from '@angular/core';

export interface Operation {
  firstNumber: number;
  secondNumber: number;
  operationSign: OperationType;
}

export enum OperationType {
  addition = '+',
  substraction = '-',
}

export interface OperationConfiguration {
  limit: number;
  minValue?: number;
  operationType: OperationType;
}

export interface OperationResult extends Operation {
  result: number;
}

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private operationCheckers = {
    [OperationType.addition]: (firstNumber: number, secondNumber: number) => firstNumber + secondNumber,
    [OperationType.substraction]: (firstNumber: number, secondNumber: number) => firstNumber - secondNumber
  };

  constructor() { }

  newOperation(operationConfiguration: OperationConfiguration): Operation {
    const operationGenerators = {
      [OperationType.addition]: this.newAddition
    };
    return operationGenerators[operationConfiguration.operationType](operationConfiguration);
  }

  private newAddition = (operationConfiguration: OperationConfiguration): Operation => {
    return {
      firstNumber: this.getRandomNumber(operationConfiguration.limit, operationConfiguration.minValue),
      secondNumber: this.getRandomNumber(operationConfiguration.limit, operationConfiguration.minValue),
      operationSign: operationConfiguration.operationType
    };
  }

  getRandomNumber(maxValue: number, minValue: number = 0): number {
    return Math.floor(Math.random() * maxValue) + minValue;
  }

  checkResult(operationObject: OperationResult): boolean {
    const checker = this.operationCheckers[operationObject.operationSign];
    return operationObject.result === checker(operationObject.firstNumber, operationObject.secondNumber);
  }
}
