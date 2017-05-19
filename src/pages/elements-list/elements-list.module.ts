import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsList } from './elements-list';

@NgModule({
  declarations: [
    ElementsList,
  ],
  imports: [
    IonicPageModule.forChild(ElementsList),
  ],
  exports: [
    ElementsList
  ]
})
export class ElementsListModule {}
