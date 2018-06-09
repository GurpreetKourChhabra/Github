import { Component,ViewChild, OnInit , Input} from '@angular/core';
import { NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    startDate:any;
    endDate:any;
    city:string;
    displayFormData: boolean = false;
    constructor(private modalService: NgbModal , private service:ModalService ) {
  }

  ngOnInit() {

  }

  open(modal) {
      let modalRef = this.modalService.open(modal);
  }

  formSubmit() {
      this.displayFormData = true;
      let sdate = this.service.startDate;
      let edate = this.service.endDate;
      this.startDate = sdate.day ? (sdate.day + "-" + sdate.month + "-" + sdate.year): "N/A";
      this.endDate = edate.day ? (edate.day + "-" + edate.month + "-" + edate.year): "N/A";
      this.city = this.service.city ? (this.service.city): "N/A" ;
  }
}
