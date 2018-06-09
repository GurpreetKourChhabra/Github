import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers:[NgbDatepickerConfig]
})
export class StartComponent implements OnInit {
    startDate: any;
    constructor(private configs: NgbDatepickerConfig , private service: ModalService) {}

  ngOnInit() {
      let date = new Date();
      this.configs.minDate = {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
      };
  }

  displayMonths = 2;
  navigation = 'select';

  setStartDate() {
      this.service.setStartDate(this.startDate);
  }

  onClickedOutside(e: Event , startDateDatepicker) {
      startDateDatepicker.close();
  }
}
