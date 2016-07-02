import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

/*
 This component is intented to be as an easy and simple example of:
 http://ionicframework.com/docs/v2/native/camera/
 */

@Component({
    templateUrl: 'build/pages/camera/camera.html'
})
export class CameraPage {

    constructor(private navController:NavController, private platform:Platform) {
        this.platform = platform;
    }    
}
