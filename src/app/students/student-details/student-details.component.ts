import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(
    private ss:StudentService,
    private route:ActivatedRoute,
    private router:Router) { }
    student:Student=new Student();
  // student:Student;
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let id = +params["id"];
      this.ss.GetStudent(id).subscribe((data)=>{
        this.student = <Student>data;
      });
    });
    
  }

}
