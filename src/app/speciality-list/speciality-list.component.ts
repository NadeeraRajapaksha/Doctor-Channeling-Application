import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Speciality{
  id : String;
  name : String;
}

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css']
})
export class SpecialityListComponent implements OnInit {

  specialities : Speciality[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

   // let url = "http://beezzserver.com/nadeera/channeling/speciality/";
    this.http.get<Speciality[]>('http://beezzserver.com/nadeera/channeling/speciality/').subscribe(data =>{this.specialities = data;
    });
  }

}
