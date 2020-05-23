import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OperationType } from '../operations.service';
import { StatusService, OperationsPageConfiguration } from '../status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  operationTypesArray = Object.entries(OperationType).map(([name, value]) => ({ name, value }));
  maxOperatorValuesArray = [10, 20, 30, 40, 50, 100, 1000, 10000];
  disableShowVisualHelp = false;

  operationConfig = new FormGroup({
    secondsToNewOperation: new FormControl(3, [Validators.min(1)]),
    totalOperations: new FormControl(10, [Validators.min(0)]),
    operationType: new FormControl(OperationType.addition),
    showVisualHelp: new FormControl(true),
    maxOperatorValue: new FormControl(10)
  });

  constructor(private statusService: StatusService, private router: Router) { }

  startOperations() {
    const configuration: OperationsPageConfiguration = this.operationConfig.value;
    this.statusService.operationPageConfiguration = configuration;
    this.router.navigateByUrl('operations');
  }

  onShowVisualHelpChanged(): void {
    this.operationConfig.controls.showVisualHelp.setValue(!this.operationConfig.controls.showVisualHelp.value);
  }

  onMaxOperationValueChanged() {
    this.disableShowVisualHelp = this.operationConfig.controls.maxOperatorValue.value !== 10;
    this.operationConfig.controls.showVisualHelp.setValue(!this.disableShowVisualHelp);
  }

}
