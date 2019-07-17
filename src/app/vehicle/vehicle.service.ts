import { Injectable } from '@angular/core';

import { ApiService } from './../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private api: ApiService) { }

  getVehicles(id?: string) {
    const endpoint = (id) ? 'vehicle/'+id : 'vehicles/';

    return this.api.get(endpoint);
  }
}
