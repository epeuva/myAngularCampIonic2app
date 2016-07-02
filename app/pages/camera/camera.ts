import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Camera} from 'ionic-native';

/*
 This component is intented to be as an easy and simple example of:
 http://ionicframework.com/docs/v2/native/camera/
 */

@Component({
    templateUrl: 'build/pages/camera/camera.html'
})
export class CameraPage {
    private image:string;

    constructor(private navController:NavController, private platform:Platform) {
        this.platform = platform;
    }

    photo() {
        console.log('camera click...');
        this.platform.ready().then(() => {
            console.log('platform rdy...');

            let options = {
                cameraDirection: Camera.Direction.BACK,
                correctOrientation: true,
                destinationType: Camera.DestinationType.FILE_URI,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
                sourceType: Camera.PictureSourceType.CAMERA,
                quality: 75,
                targetWidth: 500,
                targetHeight: 500
            };

            Camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                //console.log(imageData);
                this.image = imageData;
            }, (err) => {
                console.error(err);
            });
        });

    }
}
