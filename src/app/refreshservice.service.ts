import { Injectable } from '@angular/core';
import{Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RefreshserviceService {
  subjectNotifier:Subject<null>=new Subject<null>();
  constructor() { }
  notifyAboutChnage():void{
    this.subjectNotifier.next(null);
  }
}
