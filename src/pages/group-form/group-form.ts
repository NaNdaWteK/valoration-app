import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupServiceProvider } from '../../providers/group-service/group-service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public groupService: GroupServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupForm');
  }

  submit() {
    this.groupService.save(this.value).subscribe();
  }

}
