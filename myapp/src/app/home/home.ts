import {NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgIf, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  descriere: string = 'Scurta descriere pentru Home'
  myimg:string = 'https://cdnlogo.com/logos/a/35/angular.svg'
  showImage:boolean = true;

  salut(){
    this.descriere = 'S-a schimbat descrierea';
  }
  showImg(){
    this.showImage = !this.showImage;

  }
}
