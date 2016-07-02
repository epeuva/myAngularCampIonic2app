import {Component} from '@angular/core'
import {NavParams} from 'ionic-angular';
import {SharePage} from '../share/share';
import {CameraPage} from '../camera/camera';
import {BarcodePage} from '../barcode/barcode';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    private tab1Root:any;
    private tab2Root:any;
    private tab3Root:any;
    private mySelectedIndex: number;


    //Open page nav + tabs solution thanks to ionic-conference
    //https://github.com/driftyco/ionic-conference-app/
    constructor(navParams: NavParams) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = SharePage;
        this.tab2Root = BarcodePage;
        this.tab3Root = CameraPage;

        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
}