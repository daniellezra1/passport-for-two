import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const route = 'https://webitapimanagment.azure-api.net/awaiting';
    return this.http.request('GET', route)
}
}
