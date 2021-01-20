import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { PastAppointmentComponent } from './past-appointment/past-appointment.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'past_appointment',component: PastAppointmentComponent},
  {path:'speciality_list',component: SpecialityListComponent},
  {path:'doctor_list',component: DoctorListComponent},
  {path:'hospital_list',component: HospitalListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
