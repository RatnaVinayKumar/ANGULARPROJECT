import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  answer:number;

  constructor() { }

  ngOnInit(): void {
  }

  perform(value){
    this.answer=value;
    console.log(this.answer);
  }

}
