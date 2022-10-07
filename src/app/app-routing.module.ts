import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IVegetable } from './vegetable-list/ivegetable';

//  Vegetable viewer
import { VegetableViewerComponent } from './vegetable-viewer/vegetable-viewer.component';

const routes: Routes = [
  {
    path:"vegetables/:id",
    component: VegetableViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
