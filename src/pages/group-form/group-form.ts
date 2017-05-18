import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupServiceProvider } from '../../providers/group-service/group-service';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the GroupFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group-form',
  templateUrl: 'group-form.html',
})
export class GroupForm {
  value;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public groupService: GroupServiceProvider,
      public toastCtrl: ToastController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupForm');
  }

  submit() {
    this.groupService.save(this.value).subscribe(group => this.showSuccess(group, 'success'), err => this.showError('Ha habido un error', 'danger'));
  }

  showSuccess(group, cssClass) {
      let message = 'You added ' + group.group + ' correctly';

      let toast = this._generateToast(message,cssClass);
      toast.present();
  }

  showError(message: string, cssClass: string = '') {

      let toast = this._generateToast(message, cssClass);
      toast.present();
  }

  private _generateToast(message, cssClass) {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 5000,
          position: 'bottom',
          cssClass: cssClass
      });

      return toast
  }

}
