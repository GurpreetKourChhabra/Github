import { NgModule} from '@angular/core';
import { StartComponent } from './start.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { ModalService } from '../modal.service';
import { ClickOutsideModule } from 'ng4-click-outside';

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    ClickOutsideModule
],
exports: [StartComponent]
})

export class StartDateModule { }
