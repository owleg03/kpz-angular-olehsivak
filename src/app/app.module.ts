import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewBrandsComponent } from './components/view-brands/view-brands.component';
import { ViewCarsComponent } from './components/view-cars/view-cars.component';
import { ViewWarehousesComponent } from './components/view-warehouses/view-warehouses.component';
import { HighlightDirective } from './features/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ViewBrandsComponent,
    ViewCarsComponent,
    ViewWarehousesComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
