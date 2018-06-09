import { Component } from '@angular/core';
import { NgbModule, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {
    endDate: any;
    ifStartDateisSet:boolean = true;
    constructor(private config: NgbDatepickerConfig , private service: ModalService) {
        this.ifStartDateisSet = false;
        this.service.startSub.subscribe(startDate => {
            this.config.minDate = {
                year: startDate.year,
                month: startDate.month,
                day: startDate.day
            };
            this.ifStartDateisSet = true;
        });
    }

  onClickedOutside(e: Event , endDateDatepicker) {
      endDateDatepicker.close();
  }
  setEndDate() {
      this.service.setEndDate(this.endDate);
  }
  displayMonths = 2;
  navigation = 'select';
}
