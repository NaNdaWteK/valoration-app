import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupForm } from './group-form';

@NgModule({
  declarations: [
    GroupForm,
  ],
  imports: [
    IonicPageModule.forChild(GroupForm),
  ],
  exports: [
    GroupForm
  ]
})
export class GroupFormModule {}
