import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBrandsComponent } from './components/view-brands/view-brands.component';
import { ViewCarsComponent } from './components/view-cars/view-cars.component';
import { ViewWarehousesComponent } from './components/view-warehouses/view-warehouses.component';
import { HighlightDirective } from './features/highlight.directive';
import { TimeInterceptor } from './features/time.interceptor';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from './features/currency.pipe.pipe';
import { CreateBrandComponent } from './components/create-brand/create-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBrandsComponent,
    ViewCarsComponent,
    ViewWarehousesComponent,
    HighlightDirective,
    CurrencyPipe,
    CreateBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
