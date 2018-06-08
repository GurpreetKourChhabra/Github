import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from "@angular/router";
import { LoginComponent , User} from './login.component';
import { HomeComponent} from '../home/home.component';
import { AppComponent , routes} from '../app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { fakeAsync, tick} from '@angular/core/testing';
import { Location } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    xit('should create', () => {
    expect(component).toBeTruthy();
  });

    it('Setting enabled to false disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
    });



    it('Setting enabled to true enables the submit button', () => {
      component.enabled = true;
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeFalsy();
    });

    fit('Entering loggedIn event', () => {
    let user: User;
    // console.log("HELO "+ user);
    loginEl.nativeElement.value = "test@example.com";
    passwordEl.nativeElement.value = "123456";

    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => {
    user = value;
    console.log(user);
    });

    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe("test@example.com");
    expect(user.password).toBe("123456");
  });
    });


describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  // let routes: [{}];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent,
        AppComponent
      ]
    });
  });
      router = TestBed.get(Router);
       location = TestBed.get(Location);
       router.initialNavigation();
      it('navigate to "" redirects you to /home', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/home');
    }));
});
