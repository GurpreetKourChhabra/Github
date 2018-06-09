import { Component, OnInit , Input} from '@angular/core';
import{ Store } from '@ngrx/store';
import {ADD_STUDENT,DISPLAY_STUDENT,DELETE_STUDENT} from '../store/constant';
import { addStudent , editStudent , deleteStudent} from '../store/action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

    studentDetail: Observable<any>;

    constructor(private store: Store<any>) {
        this.studentDetail = this.store.select('student');
        console.log(this.studentDetail);
    }

  ngOnInit() {

  }

  saveStudentDetail(studentData) {
      this.studentDetail.subscribe(data => {
         for(let i = 0; i<data.length;i++) {
           console.log(data);
             data[i].isEdit = false;
         }
      });
      this.store.dispatch(addStudent(studentData));
      console.log(this.store);
  }

  editStudent(studentData) {
      this.store.dispatch(editStudent(studentData));
      console.log(this.store);
  }

  removeStudent(studentData) {
      this.store.dispatch(deleteStudent(studentData));
      console.log(this.store);
  }
}
