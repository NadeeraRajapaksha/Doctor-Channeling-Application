import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Doctor{
  id: String;
  name: String;
  speciality_name: String;
}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    let url ="http://beezzserver.com/nadeera/channeling/doctor/";
    this.http.get<Doctor[]>(url).subscribe(data=>{
         this.doctors = data;
      });
  }

}
