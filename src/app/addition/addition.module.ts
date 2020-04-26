import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionRoutingModule } from './addition-routing.module';
import { AdditionComponent } from './addition.component';


@NgModule({
  declarations: [AdditionComponent],
  imports: [
    CommonModule,
    AdditionRoutingModule
  ]
})
export class AdditionModule { }
