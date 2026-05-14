import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './models/coutry.interface';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExamApi {
  private _http = inject(HttpClient);
  private _siteURL = "https://restcountries.com/v3.1/all?fields=name,flags,capital,independent";

  public countries = signal<Countries[]>([]);

  getCountries() {
    const url = this._siteURL
    this._http.get<Countries[]>(url)
      .subscribe(data => {
        this.countries.set(data)
      })
  }
}
