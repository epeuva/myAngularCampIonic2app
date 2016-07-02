import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    public shareMsg:string;

    constructor(private platform:Platform) {
        this.platform = platform;
    }
}