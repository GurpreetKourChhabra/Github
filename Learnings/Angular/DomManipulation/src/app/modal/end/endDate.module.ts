import { NgModule} from '@angular/core';
import { EndComponent } from './end.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { ClickOutsideModule } from 'ng4-click-outside';

@NgModule({
  declarations: [
    EndComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    ClickOutsideModule
],
exports: [EndComponent],
providers:[]
})

export class EndDateModule { }
