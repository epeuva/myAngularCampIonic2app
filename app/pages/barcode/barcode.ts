import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

/*
 This component is intented to be as an easy and simple example of:
 http://ionicframework.com/docs/v2/native/barcode-scanner/
 */

@Component({
    templateUrl: 'build/pages/barcode/barcode.html'
})
export class BarcodePage {

    constructor(private platform:Platform) {
        this.platform = platform;
    }

}
