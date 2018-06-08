import { Injectable} from '@angular/core';

@Injectable()
export class LightSwitch {

    show: boolean = false;
    testData() {
        this.show = true;
        return 'real';
    }
}
