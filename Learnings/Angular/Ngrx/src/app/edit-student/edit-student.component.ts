import { Component, OnInit ,Input ,EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  constructor() { }

  studentName: string;
  rollNo: number;
  isEdit: boolean;

  @Input() studentData: object;
  @Output() editStudentDetail = new EventEmitter<object>();
  @Output() deleteStudentDetail = new EventEmitter<object>();

  ngOnInit() {
  }

  save() {
      this.studentData['isEdit'] = false;
      this.editStudentDetail.emit(this.studentData);
  }


}
