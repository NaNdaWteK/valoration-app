import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementServiceProvider } from '../../providers/element-service/element-service';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-elements-form',
  templateUrl: 'elements-form.html',
})
export class ElementsForm {
  value;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public elementService: ElementServiceProvider,
      public toastCtrl: ToastController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElementsForm');
  }

  submit() {
    this.elementService.save(this.value).subscribe(element => this.showSuccess(element, 'success'), err => this.showError('Ha habido un error', 'danger'));
  }

  showSuccess(element, cssClass) {
      let message = 'You added ' + element.element + ' correctly';

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
