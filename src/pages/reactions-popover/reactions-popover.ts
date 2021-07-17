import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reactions-popover',
  templateUrl: 'reactions-popover.html',
})
export class ReactionsPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactionsPopoverPage');
  }

  selectReaction() {
    this.viewCtrl.dismiss();
  }
}
