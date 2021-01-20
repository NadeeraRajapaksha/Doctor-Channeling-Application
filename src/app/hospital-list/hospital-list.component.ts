import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Hospiltal{
  id : String;
  name : String;
  place : String;
}

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals : Hospiltal[] = []; 

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Hospiltal[]>('http://beezzserver.com/nadeera/channeling/hospital/').
    subscribe(data =>{
      this.hospitals=data;
    });
  }

}
