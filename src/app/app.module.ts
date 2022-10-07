import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegetableViewerComponent } from './vegetable-viewer/vegetable-viewer.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { VegetableServiceService } from './vegetable-service.service';

@NgModule({
  declarations: [
    AppComponent,
    VegetableViewerComponent,
    VegetableListComponent,
    MainNavComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VegetableServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
