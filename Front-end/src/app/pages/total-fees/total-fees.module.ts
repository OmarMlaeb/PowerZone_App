import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalFeesPageRoutingModule } from './total-fees-routing.module';

import { TotalFeesPage } from './total-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalFeesPageRoutingModule
  ],
  declarations: [TotalFeesPage]
})
export class TotalFeesPageModule {}
