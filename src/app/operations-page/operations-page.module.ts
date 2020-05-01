import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsPageRoutingModule } from './operations-page-routing.module';
import { OperationsPageComponent } from './operations-page.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [OperationsPageComponent],
  imports: [
    CommonModule,
    OperationsPageRoutingModule,
    ComponentsModule
  ]
})
export class OperationsPageModule { }
