import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent extends BaseComponent implements OnInit {
  public frmKhach: FormGroup;
  public list_items: any;
  public tTong: any;
  constructor(injector: Injector, private http: HttpClient, private location: Location) {
    super(injector);
  }

  ngOnInit(): void {
    this.list_items = JSON.parse(localStorage.getItem('cart') || '[]');
    this.tTong = this.list_items.reduce((sum: any, x: any) => sum + x.giatien * x.quantity, 0);
    this.frmKhach = new FormGroup({
      'txt_hoten': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'txt_sđt': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'txt_email': new FormControl('', [Validators.email]),
      'txt_diachi': new FormControl('', [Validators.required]),
      'txt_ghichu': new FormControl('')
    });
  }
  get hoten() {
    return this.frmKhach.get('txt_hoten')!;
  }
  get sodienthoai() {
    return this.frmKhach.get('txt_sđt')!;
  }
  get email() {
    return this.frmKhach.get('txt_email')!;
  }
  get diachi() {
    return this.frmKhach.get('txt_diachi')!;
  }
  public onSubmit(val: any) {
    if (this.frmKhach.invalid) {
      return;
    }
    let obj: any = {};
    obj.khach = {
      hoTen: val.txt_hoten,
      DiaChi: val.txt_diachi,
      sđt: val.txt_sđt,
      Email: val.txt_email
    };
    console.log(obj);
    obj.donhang = [];
    this.list_items.forEach((x: any) => {
      obj.donhang.push({
        maSp: x.maSp,
        soLuong: x.quantity,
        giatien: x.giatien
      });
    });
   
    console.log(obj);
   
    this._api.post('/api/DonHang/them-gio-hang', obj).subscribe(res => {
   
      if (res && res.data) {
        alert('Đặt hàng thành công')
        
      } else {
        // alert('Có lỗi')
      }
    });

  //   const obj2 = {
  //     intent: 'sale',
  //     return_url: 'http://localhost:4200/thanhtoan',
  //     cancel_url: 'http://localhost:4200/thanhtoan',
  //     total: Math.floor(this.tTong / 23000).toString(),
  //     currency: 'USD',
  //     description: 'Payment for products'
  //   };

  //   this.http.post<any>('https://localhost:44330/api/DonHang/paypal-payment', obj2)
  //   .subscribe(response => {
  //     console.log(response);
  //     if (response) {
  //       // Redirect user to PayPal for payment
  //       window.location.href = response.data;
  //     } else {
  //       alert('Có lỗi');
  //     }
  //   }, error => {
  //     console.log(error);
  //     alert('Có lỗi');
  //   });
  // }
  }

}