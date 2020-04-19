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
  operationType?: OperationType;
}

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  newAddition(operationConfiguration: OperationConfiguration): Operation {
    return {
      firstNumber: this.getRandomNumber(operationConfiguration.limit, operationConfiguration.minValue),
      secondNumber: this.getRandomNumber(operationConfiguration.limit, operationConfiguration.minValue),
      operationSign: OperationType.addition
    };
  }

  private getRandomNumber(maxValue: number, minValue: number = 0): number {
    return Math.floor(Math.random() * maxValue) + minValue;
  }
}
