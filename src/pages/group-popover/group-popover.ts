import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-group-popover',
  templateUrl: 'group-popover.html',
})
export class GroupPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPopoverPage');
  }

  onClick() {
    this.viewController.dismiss();
  }
}
