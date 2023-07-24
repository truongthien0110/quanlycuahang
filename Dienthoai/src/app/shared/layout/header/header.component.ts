import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends  BaseComponent implements OnInit,AfterViewInit,FormsModule {
  public danhmuc:any;
  public sosanphams:any=0;
  public timkiem:any;
  searchResults: any;
  searchKeyword: any;
  constructor( injector: Injector,private _cart: CartService,private _send: SendService, private http: HttpClient) {
    super(injector);
   }
   public _addToCart(it: any) {
    this._cart.addToCart(it);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giở hàng thành công');
  }
  ngOnInit(): void {
    this.sosanphams=this._cart.getItems().length;
    this._send.objs.subscribe((res: any) => {
      if(res) {
        this.sosanphams=res;
      }
    });
    this._api.get('/api/DanhMuc/Laydanhsachdanhmuc').subscribe(res => {
      this.danhmuc = res;
      console.log(res);
      setTimeout(() => {
        this.loadScripts('./assets/js/main.js' ,); 
      });
    });

    // const formData = {
    //   page: 1, // Trang hiện tại
    //   pageSize: 10, // Số lượng sản phẩm trên mỗi trang
    //   keyword: "tên sản phẩm" // Từ khóa tìm kiếm
    // };
    
    // this._api.post('/api/SanPham/Search', formData).subscribe(res => {
    //   // Xử lý kết quả tìm kiếm
    //   console.log(res);
    // });
    
  }

  searchProduct() {
    const formData = {
        keyword: this.searchKeyword,
        page: 1,
        pageSize: 10 // Số sản phẩm hiển thị trên mỗi trang
    };

    this.http.post('https://localhost:44330/api/SanPham/SearchProduct', formData).subscribe(
        (response: any) => {
            this.searchResults = response;
        },
        (error) => {
            console.log(error);
        }
    );
}

  ngAfterViewInit() { 
    // this.loadScripts('assets/js/main.js' ); 
   }
}
