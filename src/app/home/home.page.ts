import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, Note } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notes: Note[] = [];
  modalCtrl: any;

  constructor(private dataService: DataService,
    private alertCtrl: AlertController) {
    this.dataService.getNotes().subscribe(res =>{
      this.notes = res;
    })
  }
  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nombre',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Telefono',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Guardar',
          handler: res => {
            this.dataService.addNote({ title: res.title , text: res.text});
          }
        }
      ]
    });

    await alert.present();
  }
}
