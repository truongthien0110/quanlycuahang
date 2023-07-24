import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-hoadon',
  templateUrl: './hoadon.component.html',
  styleUrls: ['./hoadon.component.css']
})
export class HoadonComponent extends BaseComponent implements OnInit, AfterViewInit {
  public list: any;
  public tTong: any;
  constructor(injector: Injector, private _router: Router,) {
    super(injector);
  }

  public Checkout () {
    this._router.navigate(['/giohang/thanhtoan']);
  }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('cart') || '[]');
    this.tTong = this.list.reduce((sum:any, it:any) => sum +  it.giatien * it.quantity, 0);
    
  }
  ngAfterViewInit() {
   
  } public Giam(maSp: any) {
    var index = this.list.findIndex((it: any) => it.maSp == maSp);
    if (index >= 0 && this.list[index].quantity >= 1) {
      this.list[index].quantity -= 1;
      this.tTong = this.list.reduce((sum:any, it:any) => sum + it.giatien  * it.quantity, 0);
    }
  }
  public Tang(maSp: any) {
    var index = this.list.findIndex((it: any) => it.maSp == maSp);
    if (index >= 0) {
      this.list[index].quantity += 1;
      this.tTong = this.list.reduce((sum:any, it:any) => sum + it.giatien  * it.quantity, 0);
      
    }
  }
  public XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
      localStorage.setItem('cart','');
      this.list = null;
      this.tTong = 0;
    }
  }
  public updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
  }
  public Xoa(maSp: any) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
      var index = this.list.findIndex((it: any) => it.maSp == maSp);
      console.log(index);

      if (index >= 0) {
        this.list.splice(index, 1);
        this.tTong = this.list.reduce((sum:any, it:any) => sum + it.giatien  * it.quantity, 0);
      }
    }
  }
}
