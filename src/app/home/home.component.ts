import { Component, OnInit } from '@angular/core';
import { Operation, OperationsService, OperationConfiguration } from '../operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  operation: Operation;

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    const additionConfiguration: OperationConfiguration = {
      limit: 10,
      minValue: 1
    };
    this.operation = this.operationService.newAddition(additionConfiguration);
  }

  onSolved(result: number) {
  }

}
