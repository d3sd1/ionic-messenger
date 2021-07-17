import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { Story } from '../../data/Story';
import { Conversation } from '../../data/Conversation';
import { User } from '../../data/User';
import { Group } from '../../data/Group';
import { GroupPair } from '../../data/GroupPair';
import { Call } from '../../data/Call';
import { Helper } from '../../data/Helper';
import { Message } from '../../data/Message';
import { LoremIpsum } from '../../data/LoremIpsum';
import { GroupPopoverPage } from '../group-popover/group-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeSegment: string = "messages";

  currentUser: User = new User("John Doe", "https://res.cloudinary.com/cediim8/image/upload/v1525222486/580b57fbd9996e24bc43be2a.png");

  stories: Story[] = [];
  conversations: Conversation[] = [];
  activeUsers: User[] = [];
  groupPairs: GroupPair[] = [];
  calls: Call[] = [];

  isMessagesOrActive: boolean = true;
  isGroups: boolean = false;
  isCalls: boolean = false;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.initialiseStories();
    this.initialiseConversations();
    this.initialiseActiveUsers();
    this.initialiseGroups();
    this.initialiseCalls();
  }

  initialiseStories() {
    var count = 0;

    Helper.shuffle(Helper.users).forEach(user => {
      // Randomly set some users as online
      if (count % 4 == 0) {
        user.isOnline = true;
      }
      count++;

      this.stories.push(new Story(user));
    });

    console.log(this.stories)
  }

  initialiseConversations() {
    var count = 0;

    Helper.shuffle(Helper.users).forEach(user => {
      var loremIpsum = new LoremIpsum();

      var lastMessage = new Message(loremIpsum.generate(20));

      // Randomly set some messages as read
      if (count % 3 == 0) {
        lastMessage.isRead = true;
      }

      count++;

      this.conversations.push(new Conversation(user, lastMessage));
    });
  }

  initialiseActiveUsers() {
    var count = 0;

    Helper.shuffle(Helper.users).forEach(user => {
      // Randomly set some users as online
      if (count % 2 == 0) {
        user.isOnline = true;
      }
      count++;

      this.activeUsers.push(user);
    });
  }

  initialiseGroups() {
    var groups = [];

    for (var i = 0; i < 10; i++) {
      var loremIpsum = new LoremIpsum();
      var users: User[] = Helper.shuffle(Helper.users);

      var group = new Group(loremIpsum.generate(Helper.randomIntFromInterval(3, 6)));

      group.lastActive = Helper.randomIntFromInterval(2, 23);
      group.pictureUrl = Helper.shuffle(Helper.images[i]).content;

      var usersCount = Helper.randomIntFromInterval(2, 6);
      group.userNames = '';

      for (var j = 0; j < usersCount; j++) {
        group.userNames += users[j].name;
        if (j < usersCount - 1) group.userNames += ', '
      }

      groups.push(group);
    }

    this.groupByPairs(groups);
  }

  groupByPairs(groups: Group[]) {
    // Group groups by pair of 2 for display
    this.groupPairs = [];

    for (var j = 0; j < groups.length; j++) {
      var group1 = groups[j];

      var group2;

      if (j + 1 == groups.length) {
        group2 = new Group('');
        group2.isEmpty = true;
      }
      else {
        group2 = groups[++j];
      }

      this.groupPairs.push(new GroupPair(group1, group2));
    }
  }

  initialiseCalls() {
    Helper.shuffle(Helper.users).forEach(user => {
      this.calls.push(new Call(user));
    });
  }

  segmentClick(segment: string) {
    this.isMessagesOrActive = false;
    this.isGroups = false;
    this.isCalls = false;

    if (segment == 'messages' || segment == 'active') {
      this.isMessagesOrActive = true;
    }
    else if (segment == 'groups') {
      this.isGroups = true;
    }
    else if (segment == 'calls') {
      this.isCalls = true;
    }
  }

  openConversation(conversation: Conversation) {
    this.navCtrl.push('ConversationDetailsPage', { conversation: conversation });
  }

  goToMyProfile() {
    this.navCtrl.push('MyProfileDetailsPage');
  }

  showGroupPopOver(myEvent) {
    let popover = this.popoverCtrl.create(GroupPopoverPage);

    popover.present({
      ev: myEvent
    });
  }
}
