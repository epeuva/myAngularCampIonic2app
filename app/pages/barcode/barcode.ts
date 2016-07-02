import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

/*
 This component is intented to be as an easy and simple example of:
 http://ionicframework.com/docs/v2/native/barcode-scanner/
 */

@Component({
    templateUrl: 'build/pages/barcode/barcode.html'
})
export class BarcodePage {

    public barcodeTxt:string;
    public error:boolean;

    constructor(private platform:Platform) {
        this.platform = platform;
    }

    scanBarcode() {
        BarcodeScanner.scan().then((barcodeData) => {
            this.error = false;
            this.barcodeTxt = barcodeData.text;
        }, (err) => {
            // An error occurred
            console.error(err);
            this.error = true;
        });
    }

    visitBarcode() {
        if (this.barcodeTxt) {
            window.open(this.barcodeTxt);
        }
    }

    clearBarcode() {
        this.barcodeTxt = null;
        this.error = false;
    }
}

