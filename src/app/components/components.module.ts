import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation/operation.component';
import { NumpadComponent } from './numpad/numpad.component';



@NgModule({
  declarations: [OperationComponent, NumpadComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OperationComponent,
    NumpadComponent
  ]
})
export class ComponentsModule { }
