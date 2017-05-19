import { Component } from '@angular/core';
import { ElementServiceProvider } from '../../providers/element-service/element-service';
import { ToastController } from 'ionic-angular';
import { ComponentFunctions } from '../../app/component';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-elements-list',
  templateUrl: 'elements-list.html',
})
export class ElementsList extends ComponentFunctions {
    elements: ElementsList[];
    constructor( public navCtrl: NavController,
                  public navParams: NavParams,
                  public elementService: ElementServiceProvider,
                  public toastCtrl: ToastController
               ) {
      super(toastCtrl);
      this.chargeElementsList();
    }

    chargeElementsList() {
      this.elementService.list(this.navParams.get('group_id')).subscribe(elements => this.addElements(elements), err => this.showError('Ha habido un error', 'danger'));
    }

    addElements(elements){
        this.elements = elements;
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad ElementsListPage');
    }

}
