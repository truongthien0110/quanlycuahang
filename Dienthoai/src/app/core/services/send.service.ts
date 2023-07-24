import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable  } from 'rxjs';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SendService {
  private objSubject = new BehaviorSubject<any>(null);
  objs = this.objSubject.asObservable();
  public _api : ApiService

  constructor(private httpClient: HttpClient) {
    this.objSubject.next(null); 
  }
  addObjct(item:any) {
    this.objSubject.next(item);
  }
  getPhuKienDienThoai(page: number, pageSize: number): Observable<any> {
    const url = `https://localhost:44330/api/SanPham/LaythongtinDienThoai?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get(url);
  }

  getMayTinhBang(page: number, pageSize: number): Observable<any> {
    const url = `https://localhost:44330/api/SanPham/LaythongtinMayTinhBang?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get(url);
  }

  getThongTinPhuKien(page: number, pageSize: number): Observable<any> {
    const url = `https://localhost:44330/api/SanPham/Laythongtinphukiendienthoai?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get(url);
  }
}