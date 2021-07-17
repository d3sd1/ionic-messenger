import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../data/User';
import { BusinessList } from '../../data/BusinessList';
import { Helper } from '../../data/Helper';

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  currentUser: User = new User("John Doe", "https://res.cloudinary.com/cediim8/image/upload/v1525222486/580b57fbd9996e24bc43be2a.png");

  businessLists: BusinessList[] = [];
  businessCategories: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initialiseBusinesses();
    this.initialiseBusinessCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  initialiseBusinesses() {
    this.businessLists = [
      new BusinessList("Featured", Helper.shuffle(Helper.featuredBusinesses)),
      new BusinessList("Popular", Helper.shuffle(Helper.popularBusinesses)),
      new BusinessList("Education", Helper.shuffle(Helper.educationBusinesses)),
      new BusinessList("Home & Auto", Helper.shuffle(Helper.homeAndAutoBusinesses))
    ]
  }

  initialiseBusinessCategories() {
    Helper.shuffle(Helper.businessCategories).forEach(businessCategory => {
      this.businessCategories.push(businessCategory);
    });
  }

  goToMyProfile() {
    this.navCtrl.push('MyProfileDetailsPage');
  }
}
