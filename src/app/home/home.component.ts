import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OperationType } from '../operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  operationTypesArray = Object.entries(OperationType).map(([name, value]) => ({ name, value }));

  operationConfig = new FormGroup({
    secondsToNewOperation: new FormControl(3),
    totalOperations: new FormControl(10),
    operationType: new FormControl(OperationType.addition)
  });

  constructor() { }



}
