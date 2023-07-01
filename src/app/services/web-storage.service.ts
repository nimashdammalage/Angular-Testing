import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(private httpClient: HttpClient) {
  }

  public get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    return window.localStorage.setItem(key, value);
  }

  public getRemote(key: string): Observable<string> {
    return this.httpClient.get<string>('/mock/api/filter');
  }

  public setRemote(payload: string): Observable<string> {
    return this.httpClient.put<string>('/mock/api/filter', payload);
  }

}
