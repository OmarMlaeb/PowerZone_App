import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private service: UserService, private alertController: AlertController) {

  }

  ngOnInit() {

  }

  async showAlertFail(){
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Email or password is incorrect. Please try again',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailEmail(){
    const alert = await this.alertController.create({
      header: 'Email address required',
      message: 'Please enter a valid email address',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailPassword(){
    const alert = await this.alertController.create({
      header: 'Password required',
      message: 'Please enter a password',
      buttons: ['OK']
    });
    await alert.present();
  }

  public onLogin(form : NgForm){
  
  }

}
