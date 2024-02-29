import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<any> {
    return this.httpClient.get<any>('https://dummyjson.com/users?limit=100');
  }
}
