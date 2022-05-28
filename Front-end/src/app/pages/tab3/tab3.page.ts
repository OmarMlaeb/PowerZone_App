import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeesService, Fee, monthlyFee } from '../../services/fees.service';
import { AttendancePage } from '../attendance/attendance.page';
import { TotalFeesPage } from '../total-fees/total-fees.page';

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

  ngOnInit() {
    this.service.getFees().subscribe(response => {
      this.fees = response;
      console.log(this.fees);
      this.total= [this.fees[this.fees.length-1]["SUM(Amount)"]];
    })
    
    this.service.getMonthlyFees().subscribe(response => {
      this.monthly = response;
    })
  }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: TotalFeesPage,
      componentProps: {
        'fee':this.monthly[0]["total"],
        'month': this.monthly[0]["month"], 
        'year':  this.monthly[0]["year"]
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data: ' + modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async initAttendanceModal() {
    const modal = await this.modalCtrl.create({
      component: AttendancePage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : ' + modalDataResponse.data);
      }
    });

    return await modal.present();
  }

}
