import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionRoutingModule } from './addition-routing.module';
import { AdditionComponent } from './addition.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [AdditionComponent],
  imports: [
    CommonModule,
    AdditionRoutingModule,
    ComponentsModule
  ]
})
export class AdditionModule { }
