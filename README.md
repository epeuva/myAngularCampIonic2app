# README #

### Table of Contents

## Install Ionic SDK ##

### Install dependencies

* npm install -g ionic@beta
* npm install -g cordova
* For iOS: http://ionicframework.com/docs/v2/resources/what-is/#xcode

### Create first app and serve it

* ionic start myAngularCampIonic2app --v2
* cd myAngularCampIonic2app

### Add platforms

ionic platform add android
ionic platform add ios

Develop

* ionic serve 

Test on device

* ionic run android
* ionic emulate ios
* (npm install ios-sim -g)

## Install Social Sharing pluggin ##

### Install dependencies

* ionic plugin add cordova-plugin-x-socialsharing
* See: http://ionicframework.com/docs/v2/native/social-sharing/
* import {SocialSharing} from 'ionic-native';

## Install Camera pluggin ##

### Install dependencies

* ionic plugin add cordova-plugin-camera
* See: https://github.com/apache/cordova-plugin-camera
* import {Camera} from 'ionic-native';

## Install Barcode Scanner pluggin ##

### Install dependencies

* ionic plugin add phonegap-plugin-barcodescanner
* See:  https://github.com/phonegap/phonegap-plugin-barcodescanner
* import {BarcodeScanner} from 'ionic-native';


## Other useful links ##

* https://github.com/driftyco/ionic-conference-app/
* http://ionicframework.com/docs/v2/
