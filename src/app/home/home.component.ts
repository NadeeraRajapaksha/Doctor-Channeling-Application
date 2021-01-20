import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';

export interface Speciality{
  id: String;
  name: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  specialities: Speciality[] = [];

  specialityControl = new FormControl();
  
  filteredSpecialities: Observable<Speciality[]> | undefined;

  constructor(public http:HttpClient) { }

  ngOnInit(): void {

    let url = "http://beezzserver.com/nadeera/channeling/speciality/";
    this.http.get<Speciality[]>(url).subscribe(data =>{
      this.specialities = data;
    });

    this.filteredSpecialities = this.specialityControl.valueChanges.pipe(
      startWith<string | Speciality>(''), 
      map(value => typeof value === 'string'? value:value.name),
      map(name => name? this._filter1(name): this.specialities.slice())
    );
  }

  private _filter1(name: String): Speciality[]{
    const filterValue = name.toLocaleLowerCase();
    return this.specialities.filter(Option => Option.name.toLocaleUpperCase().indexOf(filterValue)===0);
  }
}
