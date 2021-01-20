import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material';
import { PastAppointmentComponent } from './past-appointment/past-appointment.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PastAppointmentComponent,
    SpecialityListComponent,
    DoctorListComponent,
    HospitalListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
