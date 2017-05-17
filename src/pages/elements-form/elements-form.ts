import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementServiceProvider } from '../../providers/element-service/element-service';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-elements-form',
  templateUrl: 'elements-form.html',
})
export class ElementsForm {
  value;
  constructor(public navCtrl: NavController, public navParams: NavParams, public elementService: ElementServiceProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElementsForm');
  }

  submit() {
    this.elementService.save(this.value).subscribe(this.showSuccess.bind(this), this.showError.bind(this));
  }

  showSuccess(response) {
      var element = JSON.parse(response._body);
      let message = 'You added ' + element.element + ' correctly';
      let alert = this.alertCtrl.create({
        title: 'Element added!',
        subTitle: message,
        buttons: ['OK']
    });
      alert.present();
  }
  showError() {
      let alert = this.alertCtrl.create({
        title: 'Element not added!',
        subTitle: 'An error ocurred',
        buttons: ['OK']
      });
      alert.present();
  }

}
