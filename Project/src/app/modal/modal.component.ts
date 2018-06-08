import { Component, OnInit, ViewChild , TemplateRef , Input, Output , EventEmitter, ViewEncapsulation} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @Input() modalContent: TemplateRef<any>;
  @Output() notify =  new EventEmitter<any>();
  @ViewChild('modal') msgTempRef : TemplateRef<any>;

  constructor(private service: NgbModal) {

  }

  ngOnInit() {
    console.log(this.msgTempRef);
    // this.test();
  }

  test(content) {
    this.modalContent = content;
    console.log(content);

    if(this.modalContent) {
      this.service.open(this.msgTempRef);
    }
    else {
      console.log("Could not open modal");
    }
  }
}
