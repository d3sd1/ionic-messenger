import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../data/User';

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {
  user: User = new User("John Doe", "https://res.cloudinary.com/cediim8/image/upload/v1525222486/580b57fbd9996e24bc43be2a.png"); // default user

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var navUser = navParams.get('user');

    if (navUser) {
      this.user = navUser;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailsPage');
  }

}
