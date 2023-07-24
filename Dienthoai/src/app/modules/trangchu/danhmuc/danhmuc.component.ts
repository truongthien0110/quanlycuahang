import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { UsersService } from 'src/app//services/users.service';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent extends BaseComponent implements OnInit {

  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public list_item: any;
  public totalItem: any;
  public danhmucs: any;
  public phantram:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.loc = localStorage.getItem('loc') || '';
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._api.post('/api/DanhMuc/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, ma_danh_muc: this.id }).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.pagination.totalItems;
        this.page = res.pagination.currentPage;


        console.log(res.data);
        setTimeout(() => {
          this.loadScripts('assets/js/main.js');
        });
      });
    }); 
    this.getPagesArray();
  }

  public loadPage(page: any) {
    this.page = page;
    this._api
      .post('/api/DanhMuc/search', {
        loc: this.loc,
        page: page,
        pageSize: this.pageSize,
        ma_danh_muc: this.id
      })
      .subscribe(
        (res: any) => {
          this.list_item = res.data;
          this.totalItem = res.pagination.totalItems;
          this.page = res.pagination.currentPage;
          console.log(res.data);
          console.log(res.pagination.totalItems);
  
        },
        (error: any) => {
          console.log(error);
        }
      );
  }


  public getPagesArray(): number[] {
    const totalPages = Math.ceil(this.totalItem / this.pageSize);
    return Array(totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }
}