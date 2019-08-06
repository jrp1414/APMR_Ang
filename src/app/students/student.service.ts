import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:51529/";

  constructor(private http: HttpClient) { }
  setOptions() {
    let token= localStorage.getItem("token");
    let header: HttpHeaders = new HttpHeaders({"authorization":"Bearer "+token});
    let options: { [name: string]: HttpHeaders }={headers:header};
    return options;
  }
  GetStudents() {
    return this.http.get(this.baseUrl + "GetStudents",this.setOptions());
  }

  GetStudent(id: number) {
    return this.http.get(this.baseUrl + "GetStudent/" + id);
  }
  RefreshData: EventEmitter<Student[]> = new EventEmitter<Student[]>();

  AddStudent(student: Student) {
    return this.http.post(this.baseUrl + "AddStudent/", student);
  }

  EditStudent(id: number, student: Student) {
    return this.http.put(this.baseUrl + "UpdateStudent/" + id, student);
  }

  DeleteStudent(id: number) {
    return this.http.delete(this.baseUrl + "DeleteStudent/" + id);
  }
}
