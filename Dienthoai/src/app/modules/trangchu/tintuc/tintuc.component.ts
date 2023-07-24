import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent extends  BaseComponent implements OnInit,AfterViewInit {
  public tintuc:any;
  constructor( injector: Injector) {
    super(injector);
   }
  ngOnInit(): void {
    this._api.get('/api/TinTuc/Laythongtintintuc').subscribe(res => {
      this.tintuc = res;
      console.log(res);
      setTimeout(() => {
        this.loadScripts('assets/js/main.js' ); 
      });
    });
    

  }
  ngAfterViewInit() { 
    //this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
   }
}
