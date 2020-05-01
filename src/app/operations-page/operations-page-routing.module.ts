import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationsPageComponent } from './operations-page.component';

const routes: Routes = [{ path: '', component: OperationsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsPageRoutingModule { }
