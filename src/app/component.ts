import { ToastController } from 'ionic-angular';

export abstract class ComponentFunctions {

  constructor(public toastCtrl: ToastController) {}

  showSuccess(field, cssClass) {
      let message = 'You added ' + field + ' correctly';

      this._generateToast(message,cssClass);
  }

  showError(message: string, cssClass: string = '') {

      this._generateToast(message, cssClass);

  }

  private _generateToast(message, cssClass) {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 5000,
          position: 'bottom',
          cssClass: cssClass
      });

      toast.present();
  }
}
