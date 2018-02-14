import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: []
})
export class AccoutSettingComponent implements OnInit {
  constructor(public _ajustes: SettingsService) {}

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(q: any) {
    const tema: string = q.getAttribute('data-theme');
    this._ajustes.aplicarTema(tema);
    const selectores: any = document.getElementsByClassName('working');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    q.classList.add('working');
  }
  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
      }
    }
  }
}
