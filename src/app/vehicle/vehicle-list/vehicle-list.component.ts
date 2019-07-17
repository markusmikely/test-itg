import { Input, Component, OnInit } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

import { VehicleService } from './../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-list',
  host: {
      class:'d-flex flex-grow-1'
  },
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  error:string;
  vehiclesLoaded: Promise<boolean>;
  loading: boolean;

  constructor(private vehicleService:VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }
  getVehicles() {
    this.loading = true;
    this.vehicleService.getVehicles()
      .subscribe(response => {
        this.vehicles = response;
        this.loading = false;
        this.vehiclesLoaded = Promise.resolve(true);
      }, error => {
        this.error = error;
        this.loading = false;
        this.vehiclesLoaded = Promise.resolve(true);
      });
  }

}
