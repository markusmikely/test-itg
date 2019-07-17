import { Input, Component, OnInit } from '@angular/core';


import { Observable, of, throwError } from 'rxjs';

import { VehicleService } from './../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-list-item',
  host: {
      class:'col-3 col-md-3 col-sm-6'
  },
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.scss']
})
export class VehicleListItemComponent implements OnInit {

  @Input() vehicle: Vehicle;
  error: string;
  loading: boolean;
  vehicleLoaded: Promise<boolean>;

  constructor(private vehicleService: VehicleService ) { }

  ngOnInit() {
    this.getVehicle(this.vehicle.id);
  }

  getVehicle(id) {
    this.loading = true;
    this.vehicleService.getVehicles(id)
      .subscribe(response => {
        Object.assign(this.vehicle, response);
        this.loading = false;
        this.vehicleLoaded = Promise.resolve(true);
      }, error => {
        this.loading = false;
        this.vehicleLoaded = Promise.resolve(true);
        this.error = error;
      });
  }

}
