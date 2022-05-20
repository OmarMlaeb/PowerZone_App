import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) {

  }

  ngOnInit() {
  
  }

  async showAlertSuccess(){
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Created Account Successfully',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFail(){
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Email address is already registered',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailFirstName(){
    const alert = await this.alertController.create({
      header: 'First name is required',
      message: 'Please enter a first name',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailLastName(){
    const alert = await this.alertController.create({
      header: 'Last name is required',
      message: 'Please enter a last name',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailEmailAddress(){
    const alert = await this.alertController.create({
      header: 'Email address is required',
      message: 'Please enter a valid email address.',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  async showAlertFailPassword(){
    const alert = await this.alertController.create({
      header: 'Password is required',
      message: 'Please enter a valid password. Password should be of length 8 or greater.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailPhoneNumber(){
    const alert = await this.alertController.create({
      header: 'Phone number is required',
      message: 'Please enter a phone number. Phone number should be of 8 digits at least.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlertFailUserType(){
    const alert = await this.alertController.create({
      header: 'User type is required',
      message: 'Please select a user type',
      buttons: ['OK']
    });
    await alert.present();
  }

  public onSignup(form: NgForm){
    const first_name = form.value.first_name;
    const last_name = form.value.last_name;
    const email_address = form.value.email_address;
    const password = form.value.password;
    const phone_number = form.value.phone_number;
    const user_type = form.value.user_type;

    if(first_name == ''){
      this.showAlertFailFirstName();
      return;
    }

    if(last_name == ''){
      this.showAlertFailLastName();
      return;
    }

    if(email_address == '' || !email_address.includes('@') || !email_address.includes(".")){
      this.showAlertFailEmailAddress();
      return;
    }

    if(phone_number == '' || phone_number < 8){
      this.showAlertFailPhoneNumber();
      return;
    }

    if(password == '' || password.length < 8){
      this.showAlertFailPassword();
      return;
    }

    if(user_type == ''){
      this.showAlertFailUserType();
      return;
    }

  }

}
