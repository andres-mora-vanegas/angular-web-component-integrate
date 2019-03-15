import { Component, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';

import './wc-mood/wc-mood';
import './vanillajs-component/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modal') modal: ElementRef;

  private moods: Array<string> = [
    'awesome',
    'formidable',
    'great',
    'terrifying',
    'wonderful',
    'astonishing',
    'breathtaking'
  ];
  private _mood: string;
  isChanged: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.randomMood();
  }

  open() {
    this.modal.nativeElement.open();
  }

  randomMood() {
    const index = Math.floor(Math.random() * this.moods.length);
    if (this.mood === this.moods[index]) {
      return this.randomMood();
    }
    this.mood = this.moods[index];
  }

  moodChanged() {
    this.isChanged = true;
    setTimeout(() => {
      this.isChanged = false;
    }, 1000);
  }

  public get mood(): string {
    console.log('lectura');
    return this._mood;
  }

  public set mood(value: string) {
    console.log('escritura');
    if (this._mood !== value) {
      this._mood = value;
      this.moodChanged();
    }
  }
}
