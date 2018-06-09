import { Component, OnInit , Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

   studentName: string;
   rollNo: number;
   isEdit: boolean;

  @Output() saveDetail = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      this.saveDetail.emit({name: this.studentName, rollNo: this.rollNo, isEdit: false});
      this.studentName = "";
      this.rollNo = null;
      this.isEdit = false;
  }
}
