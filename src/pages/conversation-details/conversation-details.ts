import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Message } from '../../data/Message';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Image } from '../../data/Image';
import { LoremIpsum } from '../../data/LoremIpsum';
import { Helper } from '../../data/Helper';
import { Conversation } from '../../data/Conversation';
import { User } from '../../data/User';
import { ReactionsPopoverPage } from '../reactions-popover/reactions-popover';

@IonicPage()
@Component({
  selector: 'page-conversation-details',
  templateUrl: 'conversation-details.html',
})
export class ConversationDetailsPage {
  @ViewChild('content') content: any;
  
  user: User = new User("John Doe", "https://res.cloudinary.com/cediim8/image/upload/v1525222486/580b57fbd9996e24bc43be2a.png"); // default user
  activeAgo: number = Helper.randomIntFromInterval(2, 20);

  messages: Message[] = [];
  images: Image[] = [];

  imagesVisible: boolean = false;
  textBoxInFocus: boolean = false;
  textBoxPlaceholder: string = "Aa";

  message: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,
              public popoverCtrl: PopoverController) {
    var conversation: Conversation = navParams.get('conversation');
    
    if (conversation) {
      this.user = conversation.user;
    }

    this.insert20Messages();
    this.initialiseImages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationDetailsPage');
  }

  ionViewWillEnter() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }

  insert20Messages() {
    for (var i = 0; i <= 20; i++) {
      var loremIpsum = new LoremIpsum();
      var message = new Message(loremIpsum.generate(Helper.randomIntFromInterval(10, 20)));

      if (i % 2 == 0) {
        message.sentByMe = true;
      }
      else {
        message.sentByMe = false;
      }

      if (i % 5 == 0) {
        message.isDifferentDay = true;
        message.time = "12:00 AM";
      }

      this.messages.splice(i, 0, message);
    }

    // set second to last message as read
    this.messages[18].isRead = true;

    // set last message as delivered but not read
    this.messages[20].isDelivered = true;
  }

  getMoreMessages(refresher) {
    setTimeout(() => {
      this.insert20Messages();
      refresher.complete();
    }, 1000);
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

  initialiseImages() {
    Helper.shuffle(Helper.images).forEach(image => {
      this.images.push(image);
    });
  }

  showImages() {
    this.imagesVisible = !this.imagesVisible;
    this.scrollToBottom();
  }

  selectImage(selectedImage: Image) {
    this.images.forEach(image => {
      if (image != selectedImage) {
        image.isSelected = false;
      }
    });

    selectedImage.isSelected = !selectedImage.isSelected;
  }

  sendImage(image: Image) {
    var imageMessage = new Message(image.content);
    imageMessage.isImage = true;
    imageMessage.isDelivered = true;
    imageMessage.sentByMe = true;
    
    this.messages.push(imageMessage);

    image.isSelected = false;
    this.imagesVisible = false;
    
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.message == "") return;
    
    var textMessage = new Message(this.message);
    textMessage.isDelivered = true;
    textMessage.sentByMe = true;

    this.messages.push(textMessage);
    console.log(this.messages)
  
    this.scrollToBottom();
    this.message = "";
  }

  onFocus() {
    this.textBoxInFocus = true;
    this.textBoxPlaceholder = "Type a message...";
  }

  onBlur() {
    this.textBoxInFocus = false;
    this.textBoxPlaceholder = "Aa";
  }

  showSeenTime(selectedMessage: Message) {
    this.messages.forEach(message => {
      if (message != selectedMessage) {
        message.showSeenTime = false;
      }
    });

    selectedMessage.showSeenTime = !selectedMessage.showSeenTime;
  }

  goToProfile(user: User) {
    this.navCtrl.push('ProfileDetailsPage', { user: user });
  }

  showReactionsPopOver(event) {
    let popover = this.popoverCtrl.create(ReactionsPopoverPage);

    popover.present({
      ev: event
    });
  }
}
