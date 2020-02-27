import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities:string[];
  toggleList:boolean;
  hasTableClass:boolean;



  constructor() {
    this.toggleList=false;
   }

  ngOnInit(): void {
    this.cities=["pune","mumbai","kolkata","bengaluru","hyderabad","chennai","Delhi"];
  }
  onShow():void{
    this.toggleList=true;
  }
  onHide():void{
    this.toggleList=false;
  }
  onToggle(){
    this.toggleList=!this.toggleList;
  
  }
  AddLast(city){
    this.cities.push(city)
  }
  onDelete(city){
    //for(let i=0;i<this.cities.length;i++)
   //{
      //if(this.cities[i]==city)
      //{
  this.cities.splice(this.cities.indexOf(city),1)
 // this.cities.splice(i,1)
      //}
   }
   AddFirst(city){
    this.cities.unshift(city);
   }
   DeleteFirst()
   {
    this.cities.shift();
   }
   DeleteLast()
   {
    this.cities.pop();
   }
  
   onChange(){
    this.hasTableClass=!this.hasTableClass;
    this.  myclasses={
      "r1":false,
      "r2":true
    };
   }
   myclasses={
    "r1":true,
    "r2":false
  };

}
