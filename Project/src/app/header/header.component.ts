import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor(private router: Router ,  private service: AuthService) {
      this.router.events
      .subscribe((event) => {
        this.isLoggedIn = true;
        // console.log(event);
      });
   }

  ngOnInit() {
  }

  logout() {
      this.service.logout();
      this.router.navigate(['home']);
  }
}
