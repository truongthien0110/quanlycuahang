import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})
export class ChitietspComponent extends BaseComponent implements OnInit, AfterViewInit {
  public item:any;
  public splienquan:any;
  constructor( injector: Injector,private _cart: CartService, private _send: SendService) {
    super(injector);
   }
   public _addToCart(item: any) {
    this._cart.addToCart(item);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giở hàng thành công');
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/SanPham/laythongtinsp/'+id).subscribe(res => {
      this.item = res;
    console.log(res);
      setTimeout(() => {
        this.loadScripts('assets/js/main.js' ); 
      });
    });
    });
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this._api.get('/api/SanPham/Sanphamlienquan/'+id).subscribe(res => {
      this.splienquan= res;
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

