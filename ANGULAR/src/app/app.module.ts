import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import{ ProductModule } from './product/product.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetUserComponent } from './greet-user/greet-user.component';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { CityListComponent } from './city-list/city-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReversePipe } from './reverse.pipe';
import { MyStyleDirective } from './my-style.directive';
import { CubePipe } from './cube.pipe';
import { SquarePipe } from './square.pipe';
import { PowPipe } from './pow.pipe';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetUserComponent,
    HelloUserComponent,
    PersonFormComponent,
    CityListComponent,
    CountryListComponent,
    DayPlannerComponent,
    CalculatorComponent,
    ReversePipe,
    MyStyleDirective,
    CubePipe,
    SquarePipe,
    PowPipe,
    LifeCycleHookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
