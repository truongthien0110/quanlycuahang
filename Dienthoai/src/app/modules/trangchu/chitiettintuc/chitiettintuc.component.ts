import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-chitiettintuc',
  templateUrl: './chitiettintuc.component.html',
  styleUrls: ['./chitiettintuc.component.css']
})
export class ChitiettintucComponent extends BaseComponent implements OnInit, AfterViewInit {
  public item:any;
  constructor(injector: Injector,) {
    super(injector);
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/TinTuc/Laythongtintintuc/'+id).subscribe(res => {
      this.item = res;
    console.log(res);
      setTimeout(() => {
        this.loadScripts('assets/js/main.js' ); 
      });
    });
    });
  }
  ngAfterViewInit() {
    //this.loadScripts('assets/js/image_product.js', 'assets/js/hide_menu.js', 'assets/js/cart.js');
  }

}