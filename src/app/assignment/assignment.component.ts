import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit,OnDestroy {

  isLoading: boolean = true;
  showHeader:boolean=false;
  public countries: any;
  public universities: any;
  public detailedInfo: any;
  public listOfData: any;
  private countrySubscription$!: Subscription;
  private universitySubscription$!: Subscription;


  public universityDetails: {
    universityName: string;
    website: string;
    countryCode: string;
    country: string;
  }[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.isLoading = true;
    this.countrySubscription$=this.commonService.getCountriesList().subscribe((data: any) => {
      //get unique countries from the list
      const uniqueCountries = Array.from(
        new Set(data.map((item: any) => item.country))
      );
      //Filter the countries from unique countries
      var countriesList = uniqueCountries.filter(function (country) {
        if (
          country == 'United States' ||
          country == 'United Kingdom' ||
          country == 'Canada'
        ) {
          return country;
        }
      });
      console.log(countriesList);
      this.countries = countriesList;
      this.isLoading = false;
    });

  }

  //Dropdown Country Selection
  selectedCountry(event: any) {
    this.isLoading = true;
    this.universityDetails = [];
    const selectedValue = event.option.value;
    this.universitySubscription$=this.commonService.getUniversity(selectedValue).subscribe((data: any) => {
      if (data != null) {
        for (let res in data) {
          this.universityDetails.push({
            universityName: data[res]['name'],
            website: data[res]['web_pages'][0],
            country: data[res]['country'],
            countryCode: data[res]['alpha_two_code'],
          });
        }
        this.isLoading = false;
        this.showHeader=true;
        console.log('data', this.universityDetails);
      }

      this.universities = data;
      console.log('data', this.universities);
    });
  }

  //Cleaning activities
  ngOnDestroy(){
    this.countrySubscription$.unsubscribe();
    this.universitySubscription$.unsubscribe();
  }
}
