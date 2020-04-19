import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation/operation.component';



@NgModule({
  declarations: [OperationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OperationComponent
  ]
})
export class ComponentsModule { }
