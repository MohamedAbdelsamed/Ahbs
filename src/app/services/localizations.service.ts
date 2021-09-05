import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

enum lang  {
  'ar' = "ar",
  'en' = "en"
}

@Injectable({
  providedIn: 'root'
})
export class LocalizationsService {
private currentLanguage = new BehaviorSubject<string>(lang.en)
  constructor(
    private translate: TranslateService,
    private http:HttpClient )
    { 
      this.initLanguage();
    }

    async initLanguage(){
      
      let Language = this.getLanguage();
      this.translate.setDefaultLang(Language);
      this.setLanguage(Language);
      this.toggleDirection(Language)
    }

    getLanguage():string{
      if(!localStorage.getItem('lang')){
        localStorage.setItem('lang',lang.en)
        return lang.en;
      }else{
        return localStorage.getItem('lang');
      }
    }

    setLanguage(lang){
      this.translate.use(lang);
      localStorage.setItem('lang',lang);
      this.currentLanguage.next(lang)
    }

    toggleDirection(lang){
        let body = document.getElementsByTagName('body')[0];
        let html = document.getElementsByTagName('html')[0];

        html.setAttribute('lang',lang)

        if(lang === 'en'){
          body.classList.add('ltr');
          body.classList.remove('rtl')
        }else{
          body.classList.remove('ltr');
          body.classList.add('rtl')
        }
    }

    updateLanguage(lang){
      this.currentLanguage.next(lang);
    }

    getCurrentLanguage(): Observable<string>{
      return this.currentLanguage.asObservable();
    }

    isArabic(): boolean{
      return localStorage.getItem('lang') == lang.ar
    }

    isEnglish(): boolean{
      return localStorage.getItem('lang') == lang.en
    }

    switchLanguage() {
      if (this.isArabic()){
        this.setLanguage(lang.en)
      }else{
        this.setLanguage(lang.ar)
      }
    }

}
