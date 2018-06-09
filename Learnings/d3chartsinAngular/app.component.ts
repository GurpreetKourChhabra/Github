import { Component } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public colors = ['red', 'green', 'blue']
  public dataColumns = [1];
  setChartData: boolean = false;
  public barChartData = [];
  public pieChartData = [];

  constructor(private service: HomeService) {
      this.getDistinctNames();
      this.getDataByGender();
  }

  getDistinctNames() {
      this.service.getDistinctNames().subscribe(data => {
          this.barChartData = data;
      });
  }
  getDataByGender() {
      this.service.getDataByGender().subscribe(data => {
          console.log(data);
          console.log(typeof(data[0].id));
          this.pieChartData = data;
          this.setChartData = true;
      });
  }

  insertUser() {
      this.service.insertUser().subscribe(data => {
          console.log("Data inserted")
      });
  }
 }
