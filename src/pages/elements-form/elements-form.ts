import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementServiceProvider } from '../../providers/element-service/element-service';
import { ToastController } from 'ionic-angular';
import { ComponentFunctions } from '../../app/component';
import { ElementsList } from '../elements-list/elements-list';

@IonicPage()
@Component({
  selector: 'page-elements-form',
  templateUrl: 'elements-form.html',
})
export class ElementsForm extends ComponentFunctions{
  value;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public elementService: ElementServiceProvider,
      public toastCtrl: ToastController
  ) {
      super(toastCtrl);
  }

  openElementsListPage(){
      let id = this.navParams.get('group_id');
      this.navCtrl.push(ElementsList, {
          group_id: id
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ElementsForm');
  }

  submit() {
    this.elementService.save(this.value).subscribe(element => this.showSuccess(element.element, 'success'), err => this.showError('Ha habido un error', 'danger'));
  }



}
