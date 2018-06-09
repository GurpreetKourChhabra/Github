import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuLibComponent } from './mu-lib.component';

describe('MuLibComponent', () => {
  let component: MuLibComponent;
  let fixture: ComponentFixture<MuLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
