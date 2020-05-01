import { Injectable } from '@angular/core';
import { OperationType } from './operations.service';

export interface OperationsPageConfiguration {
  operationType: OperationType;
  secondsToNewOperation: number;
  totalOperations: number;
}
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private currentOperationPageConfiguration: OperationsPageConfiguration;

  constructor() { }

  get operationPageConfiguration(): OperationsPageConfiguration {
    return this.currentOperationPageConfiguration;
  }

  set operationPageConfiguration(opPageConfig: OperationsPageConfiguration) {
    this.currentOperationPageConfiguration = opPageConfig;
  }

}
