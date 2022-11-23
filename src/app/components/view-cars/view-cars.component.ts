import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((result: Car[]) => (this.cars = result));
    console.log(this.cars);
  }
}
