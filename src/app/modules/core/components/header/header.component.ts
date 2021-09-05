import { LocalizationsService } from './../../../../services/localizations.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate:TranslateService,
              private Localizations : LocalizationsService) { }

  ngOnInit(): void {
  // this.translate.
  }
 
  onChange(val){
    if(val === 'English'){
        this.Localizations.setLanguage('en');
        this.translate.setDefaultLang('en');
        this.Localizations.setLanguage('en');
        this.Localizations.toggleDirection('en');
    }
    if(val === 'عربي'){
        this.Localizations.setLanguage('ar');
        this.translate.setDefaultLang('ar');
        this.Localizations.setLanguage('ar');
        this.Localizations.toggleDirection('ar')
    }
  }

}
