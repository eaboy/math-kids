import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation/operation.component';
import { NumpadComponent } from './numpad/numpad.component';
import { VisualHelpComponent } from './visual-help/visual-help.component';



@NgModule({
  declarations: [OperationComponent, NumpadComponent, VisualHelpComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OperationComponent,
    NumpadComponent
  ]
})
export class ComponentsModule { }
