import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../data/User';
import { Helper } from '../../data/Helper';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  currentUser: User = new User("John Doe", "https://res.cloudinary.com/cediim8/image/upload/v1525222486/580b57fbd9996e24bc43be2a.png");

  contacts: User[] = [];

  constructor(public navCtrl: NavController) {
    this.initialiseContacts();
  }

  initialiseContacts() {
    Helper.shuffle(Helper.users).forEach(user => {
      this.contacts.push(user);
    });
  }

  goToMyProfile() {
    this.navCtrl.push('MyProfileDetailsPage');
  }
}
