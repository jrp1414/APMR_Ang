import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  studentForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private ss:StudentService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
        "FirstName": "",
        "LastName": "",
        "MobileNo": "",
        "EmailId": "",
        "Address":this.fb.group({
          "AddLine1": "",
          "AddLine2": "",
          "AddLine3": "",
          "City": "",
          "State": ""
      })    
    });
  }

  OnStudentAdded(){
    this.ss.AddStudent(this.studentForm.value).subscribe((data)=>{
      this.ss.RefreshData.emit(<Student[]>data);
      this.router.navigate(["students"]);
    });
  }

}
