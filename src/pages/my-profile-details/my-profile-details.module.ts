import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfileDetailsPage } from './my-profile-details';

@NgModule({
  declarations: [
    MyProfileDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProfileDetailsPage),
  ],
})
export class MyProfileDetailsPageModule {}
