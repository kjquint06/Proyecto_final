import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  cars: Car[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

}
