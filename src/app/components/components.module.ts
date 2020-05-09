import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation/operation.component';
import { NumpadComponent } from './numpad/numpad.component';
import { VisualHelpComponent } from './visual-help/visual-help.component';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [OperationComponent, NumpadComponent, VisualHelpComponent, SuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OperationComponent,
    NumpadComponent,
    VisualHelpComponent,
    SuccessComponent
  ]
})
export class ComponentsModule { }
