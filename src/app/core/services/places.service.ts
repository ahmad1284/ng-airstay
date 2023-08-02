import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaces() {
    return this.http.get<any[]>("http://localhost:8090/api/places");
  }
  getPlaceByID(id: any) {
    return this.http.get<any>(`http://localhost:8090/api/places/${id}`);
  }
  saveNewPlace(data: any) {
    return this.http.post("http://localhost:8090/api/places/", data);
  }
  updatePlace(id: any, data: any) {
    return this.http.put(`http://localhost:8090/api/places/${id}`, data);
  }
  deletePlace(id: any) {
    return this.http.delete(`http://localhost:8090/api/places/${id}`);
  }
}
