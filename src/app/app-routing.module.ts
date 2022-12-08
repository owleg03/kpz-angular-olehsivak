import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBrandsComponent } from './components/view-brands/view-brands.component';
import { ViewWarehousesComponent } from './components/view-warehouses/view-warehouses.component';
import { ViewCarsComponent } from './components/view-cars/view-cars.component';
import { CreateBrandComponent } from './components/create-brand/create-brand.component';

const routes: Routes = [
  { path: 'brands', component: ViewBrandsComponent },
  { path: 'warehouses', component: ViewWarehousesComponent },
  { path: 'cars', component: ViewCarsComponent },
  { path: 'brands/create', component: CreateBrandComponent},
  { path: 'greeting', loadChildren: () => import('./greeting/greeting.module').then(m => m.GreetingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
