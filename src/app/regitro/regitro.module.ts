import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegitroPageRoutingModule } from './regitro-routing.module';

import { RegitroPage } from './regitro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegitroPageRoutingModule
  ],
  declarations: [RegitroPage]
})
export class RegitroPageModule {}
