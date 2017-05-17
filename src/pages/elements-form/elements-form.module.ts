import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsForm } from './elements-form';

@NgModule({
  declarations: [
    ElementsForm,
  ],
  imports: [
    IonicPageModule.forChild(ElementsForm),
  ],
  exports: [
    ElementsForm
  ]
})
export class ElementsFormModule {}
