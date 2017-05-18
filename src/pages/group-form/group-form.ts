import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupServiceProvider } from '../../providers/group-service/group-service';
import { ToastController } from 'ionic-angular';
import { ComponentFunctions } from '../../app/component';

@IonicPage()
@Component({
  selector: 'page-group-form',
  templateUrl: 'group-form.html',
})
export class GroupForm extends ComponentFunctions{
  value;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public groupService: GroupServiceProvider,
      public toastCtrl: ToastController
  ) {
      super(toastCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupForm');
  }

  submit() {
    this.groupService.save(this.value).subscribe(group => this.showSuccess(group.group, 'success'), err => this.showError('Ha habido un error', 'danger'));
  }

}
