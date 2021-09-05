import { Component, OnInit } from '@angular/core';
import { LocalizationsService } from './services/localizations.service';
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AHBS';
  constructor(private translate: TranslateService,
              private router: Router,
              private localizations: LocalizationsService) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (event.id === 1 && event.url === event.urlAfterRedirects) {
                this.localizations.setLanguage('en');
                this.localizations.setLanguage('en');
                this.localizations.toggleDirection('en')
                this.translate.setDefaultLang('en')
                // this.translate.setDefaultLang('en');
            }
      })
  }
}
