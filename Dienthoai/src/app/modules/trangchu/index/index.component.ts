import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit,AfterViewInit {
  public list_item:any;
  public phukiendienthoai:any;
  public dienthoai:any;
  phantram: number;
Math: any;
  constructor( injector: Injector,private _cart: CartService, private _send: SendService) {
    super(injector);
   }
  
   public _addToCart(it: any) {
    this._cart.addToCart(it);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giở hàng thành công');
  }
  ngOnInit(): void {
    this._api.get('/api/SanPham/LaythongtinMayTinhBang').subscribe(res => {
      this.list_item = res;
      console.log(res);
      setTimeout(() => {
        this.loadScripts('./assets/js/main.js','/assets/js/verdor/jquery-1.12.4.min.js' ); 
      });
    });
    this._api.get('/api/SanPham/Laythongtinphukiendienthoai').subscribe(res => {
      this.phukiendienthoai = res;
      console.log(res);
      setTimeout(() => {
        this.loadScripts('./assets/js/main.js' ); 
      });
    });
    this._api.get('/api/SanPham/LaythongtinDienThoai').subscribe(res => {
      this.dienthoai = res;
      console.log(res);
      setTimeout(() => {
        this.loadScripts('./assets/js/main.js' ); 
      });
    });
    
    

    //  this._api.post('/api/item/search', {page:1, pageSize:6}).subscribe(res => {
    //   this.list_item = res.data;
    //   debugger;
    //   setTimeout(() => {
    //     this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    //   });
    // });

  }
  ngAfterViewInit() { 
    // this.loadScripts('/assets/js/main.js' ); 
   }
}
function calculateDiscountPercentage(originalPrice: any, number: any, salePrice: any, number1: any) {
  throw new Error('Function not implemented.');
}

