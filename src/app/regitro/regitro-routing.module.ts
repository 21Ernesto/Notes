import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegitroPage } from './regitro.page';

const routes: Routes = [
  {
    path: '',
    component: RegitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegitroPageRoutingModule {}
