import { Component } from '@angular/core';
import { ExamApi } from '../exam-api';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [CommonModule],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
  private _itemsApiService = inject(ExamApi);
  countries = this._itemsApiService.countries;

  constructor() {
    this._itemsApiService.getCountries();

    for (const country of this.countries()) {
      console.log(country.name.common)
    }
  }

}
