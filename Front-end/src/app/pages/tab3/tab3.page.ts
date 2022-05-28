import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeesService, Fee, monthlyFee } from '../../services/fees.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private service: FeesService, public modalCtrl: ModalController) {

  }

  modalDataResponse: any;

  fees: Fee[];
  total: number[];
  monthly: monthlyFee[];

}
