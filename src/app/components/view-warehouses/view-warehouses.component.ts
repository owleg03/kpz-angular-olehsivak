import { Component } from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-view-warehouses',
  templateUrl: './view-warehouses.component.html',
  styleUrls: ['./view-warehouses.component.css']
})
export class ViewWarehousesComponent {
  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.warehouseService.getWarehouses().subscribe((result: Warehouse[]) => (this.warehouses = result));
    console.log(this.warehouses);
  }
}
