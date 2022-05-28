import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalFeesPage } from './total-fees.page';

const routes: Routes = [
  {
    path: '',
    component: TotalFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalFeesPageRoutingModule {}
