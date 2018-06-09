import { Component, OnInit , Input ,Output ,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  @Input() studentData: Observable<any>;
  @Output() updateStudent = new EventEmitter<any>();
  @Output() removeStudent = new EventEmitter<any>();

  constructor() {
   }

  ngOnInit() {

  }

  editStudent(student) {
      this.updateStudent.emit(student);
  }

  deleteStudent(student) {
      this.removeStudent.emit(student);
  }

  update(student) {
      student.isEdit = true;
      this.studentData.subscribe(data => {
          for (let i = 0; i< data.length; i++) {
              data[i].isEdit = false;
          }
          student.isEdit = true;
      });
  }
}
