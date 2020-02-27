import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  today:Date=new Date;
  flowers:string[]=["Rose","Jasmine","Lotus","Lily","Sunflower"]
  msg:string;
  age:number;
}
