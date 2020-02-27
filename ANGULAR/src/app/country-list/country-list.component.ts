import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  
  countries:string[];
  toggleList:boolean;

  constructor() { 
    this.toggleList=false;
  }

  ngOnInit(): void {
    this.countries=["India","America","South Africa","Pakistan","Australia","Bangladesh"];
  }
  onToggle(){
    this.toggleList=!this.toggleList;
  }
  onSave(country){
    this.countries.push(country)
  }

}
