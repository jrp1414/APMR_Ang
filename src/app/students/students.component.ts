import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(
    public studentService:StudentService,
    public router:Router,
    public route:ActivatedRoute) { }
  students:Student[];
  ngOnInit() {
    this.studentService.GetStudents().subscribe((data)=>{
      this.students = <Student[]>data;      
    });

    this.studentService.RefreshData.subscribe((data)=>{
      this.students = data;
    });
  }

  NewStudent(){
    this.router.navigate(["new"],{relativeTo:this.route});
  }

}
