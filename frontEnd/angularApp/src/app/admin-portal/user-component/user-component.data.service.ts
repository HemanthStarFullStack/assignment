// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8000'; // Change this URL to match your Node.js server endpoint

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allUsers`);
  }
}
