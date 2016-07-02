import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';


interface PageObj {
    title: string;
    component: any;
    icon?: string;
    tab?: number;
}

@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {

    //Get access to rootPage nav component and its methods..
    //Elements that are located inside its template are considered viewChildren. We decorate a property (nav) with Nav children
    //We cannot put nav as a DI in app.ts as is a child of this component
    @ViewChild(Nav) nav: Nav;

    private rootPage:any;
    private pages:PageObj[];

    constructor(private platform:Platform) {
        this.rootPage = HomePage;

        this.pages = [
            { title: "Share Page", component: TabsPage, icon: 'md-share', tab: 0 },
            { title: "Barcode Page", component: TabsPage, icon: 'md-qr-scanner', tab: 1 },
            { title: "Camera Page", component: TabsPage, icon: 'md-camera', tab: 2 },
            { title: "Return Home Page", component: HomePage, icon: 'md-home' }
        ];

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    //Open page nav + tabs solution thanks to ionic-conference
    //https://github.com/driftyco/ionic-conference-app/
    openPage(page) {
        if (page.component) {
            if (page.tab) {
                this.nav.setRoot(page.component, {tabIndex: page.tab});
            } else {
                this.nav.setRoot(page.component);
            }
        }
    }
}

ionicBootstrap(MyApp);