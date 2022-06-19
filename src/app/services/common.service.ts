import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private endPointURL = "http://universities.hipolabs.com/search";
  constructor(private _httpc: HttpClient) { }

  //Countries list service
  getCountriesList() {

    return this._httpc.get(this.endPointURL);

  }

  //Get University details by country name
  getUniversity(selectedValue: any) {
    const httpParams = new HttpParams({
      fromObject: {
        country: selectedValue
      }
    });


    return this._httpc.get(this.endPointURL, { params: httpParams });
  }

}








