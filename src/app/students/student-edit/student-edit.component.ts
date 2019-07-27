import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private ss:StudentService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
  student:Student=new Student();
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
    this.route.params.subscribe((params)=>{
      let id = +params["id"];
      this.ss.GetStudent(id).subscribe((resp)=>{
        this.student = <Student>resp;
        console.log(this.student);
        this.studentForm.patchValue(this.student);
      });
    });
  }

  OnStudentEdited(){
    this.ss.EditStudent(this.student.StudentId,this.studentForm.value).subscribe((data)=>{
      this.ss.RefreshData.emit(<Student[]>data);
      this.router.navigate(["students"]);
    });
  }

}
