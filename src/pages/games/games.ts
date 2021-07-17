import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../data/User';
import { Helper } from '../../data/Helper';
import { Game } from '../../data/Game';

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  currentUser: User = new User("John Doe", "https://res.cloudinary.com/cediim8/image/upload/v1525222486/580b57fbd9996e24bc43be2a.png");

  games: Game[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initialiseGames();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

  initialiseGames() {
    Helper.shuffle(Helper.games).forEach(game => {
      this.games.push(game);
    });
  }

  goToMyProfile() {
    this.navCtrl.push('MyProfileDetailsPage');
  }
}
