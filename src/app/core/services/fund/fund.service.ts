import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Fund } from '../../models/fund.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  private apiUrl = 'api/funds.json';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.apiUrl).pipe(delay(800));
  }
}
