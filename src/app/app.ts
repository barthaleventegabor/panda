import { Component, inject, signal } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('panda');

  translateService = inject(TranslateService);

  translate!: TranslateService

  ngOnInit() {
    this.translate = this.translateService;
    this.translate.use('hu');
  }

  changeLanguage(lang: Event): void {
    this.translate.use((lang.target as HTMLSelectElement).value);
  }

}
