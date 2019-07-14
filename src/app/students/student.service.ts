import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string="http://localhost:51529/";

  constructor(private http:HttpClient) { }

  GetStudents(){
    return this.http.get(this.baseUrl+"GetStudents");
  }

  GetStudent(id:number){
    return this.http.get(this.baseUrl+"GetStudent/"+id);
  }
  RefreshData:EventEmitter<Student[]>=new EventEmitter<Student[]>();

  AddStudent(student:Student){
    return this.http.post(this.baseUrl+"AddStudent/",student);
  }
}
