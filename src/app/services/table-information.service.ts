import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TableInformationService {
  constructor(private http: HttpClient) {}

  public apiUrl: string = 'https://rickandmortyapi.com/api/character/';

  apiCharacter(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(tap((res) => res));
  }

  public getCharacters(page: number) {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  public getFilter(value: string, param: string, numberPage: number) {
    if (value) {
      if (numberPage > 0)
        return this.http.get<any>(
          `${this.apiUrl}?${param}=${value}&page=${numberPage}`
        );
      else return this.http.get<any>(`${this.apiUrl}?${param}=${value}`);
    } else return this.http.get<any>(`${this.apiUrl}`);
  }
}
