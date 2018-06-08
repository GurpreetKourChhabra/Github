// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { LightswitchCompComponent } from './lightswitch-comp.component';
// import { LightSwitch } from './lightswitch-comp.service';
// import { FakeService }
// describe('LightSwitch', () => {
//   let service: LightSwitch;
//   beforeEach(() => { service = new LightSwitch();
//    });
//
//   it('#getValue should return real value', () => {
//     expect(service.testData()).toBe('real');
//   });
//
//   it('#getValue should return faked value from a fakeService', () => {
//     fakeService = new FakeService();
//     expect(fakeService.getValue()).toBe('faked service value');
//   });
//
//   const valueServiceSpy =
//       jasmine.createSpyObj('ValueService', ['getValue']);
//       console.log(valueServiceSpy);
//
//       const stubValue = 'stub value';
//       console.log(valueServiceSpy.getValue());
//         valueServiceSpy.getValue.and.returnValue(stubValue);
//   }
//   // it('' , () => {
//   //
//   // });
//
//
//
//
// // Working test case
// // describe('LightswitchComp', () => {
// //   it('#clicked() should toggle #isOn Test 1', () => {
// //     const comp = new LightswitchCompComponent();
// //     expect(comp.isOn).toBe(false, 'off at first');
// //     comp.clicked();
// //     console.log(comp.message);
// //     expect(comp.isOn).toBe(true, 'on after click');
// //     comp.clicked();
// //     console.log(comp.message);
// //     expect(comp.isOn).toBe(false, 'off after second click');
// //   });
// //
// //   it('#clicked() should set #message to "is on Test2"', () => {
// //     const comp = new LightswitchCompComponent();
// //     expect(comp.message).toMatch(/is off/i, 'off at first');
// //     comp.clicked();
// //     expect(comp.message).toMatch(/is on/i, 'on after clicked');
// //   });
// // });
