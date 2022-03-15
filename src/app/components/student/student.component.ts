import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentName;

  constructor(private service:StudentService) { 
    this.studentName = service.studentName;
  }
  ngOnInit(): void {
  }

}
