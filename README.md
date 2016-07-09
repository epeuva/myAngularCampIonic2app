## My Angular Camp Ionic2 (first) app

[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]

### Table of Contents

## Install Ionic SDK ##

### Install dependencies

* npm install -g ionic@beta
* npm install -g cordova
* For iOS: http://ionicframework.com/docs/v2/resources/what-is/#xcode

### Create first app, install project dependencies and serve it

* ionic start myAngularCampIonic2app --v2
* cd myAngularCampIonic2app
* npm install

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

## License

MIT


[travis-badge]: https://travis-ci.org/epeuva/myAngularCampIonic2app.svg?branch=master
[travis-badge-url]: https://travis-ci.org/epeuva/myAngularCampIonic2app
[david-badge]: https://david-dm.org/epeuva/myAngularCampIonic2app.svg
[david-badge-url]: https://david-dm.org/epeuva/myAngularCampIonic2app
[david-dev-badge]: https://david-dm.org/epeuva/myAngularCampIonic2app/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/epeuva/myAngularCampIonic2app#info=devDependencies