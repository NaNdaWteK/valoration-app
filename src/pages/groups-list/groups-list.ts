import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupServiceProvider } from '../../providers/group-service/group-service';
import { ToastController } from 'ionic-angular';
import { ComponentFunctions } from '../../app/component';
import { ElementsForm } from '../elements-form/elements-form';
import { ElementsList } from '../elements-list/elements-list';

@IonicPage()
@Component({
  selector: 'page-groups-list',
  templateUrl: 'groups-list.html',
})
export class GroupsList extends ComponentFunctions {
    groups: GroupsList[];
    constructor(  public navCtrl: NavController,
                  public navParams: NavParams,
                  public groupService: GroupServiceProvider,
                  public toastCtrl: ToastController
                ) {
      super(toastCtrl);
      this.chargeGroupsList();
    }

    chargeGroupsList() {
        let company_id = 1;
        this.groupService.list(company_id).subscribe(groups => this.addGroups(groups), err => this.showError('Ha habido un error', 'danger'));
    }
    addGroups(groups){
        console.log(groups);
        this.groups = groups;
    }
  openElementsListPage(id){
      this.navCtrl.push(ElementsList, {
          group_id: id
      });
  }

  openElementsFormPage(id){
      this.navCtrl.push(ElementsForm, {
          group_id: id
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsListPage');
  }

}
