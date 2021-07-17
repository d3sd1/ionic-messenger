import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GamesPage } from '../games/games';
import { BusinessPage } from '../business/business';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab4Root = GamesPage;
  tab5Root = BusinessPage;

  constructor(private camera: Camera) {

  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
    }, (err) => {
    });
  }
}
