import { Component, AfterViewChecked,OnInit,ChangeDetectorRef} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewChecked,OnInit{
 admin:string | undefined;
 adminCheck: boolean = false;
 basicNavitems:string|undefined;

  constructor(private dataServiceRef:DataService,private detectionRef:ChangeDetectorRef){

  }
  ngOnInit(): void { 
  }
  ngAfterViewChecked(): void {
    this.adminCheck=this.dataServiceRef.adminCheck1;
    // console.log(this.adminCheck)
    if(this.adminCheck){
      this.admin="adminnotlogged"
      this.basicNavitems="adminsuccess"
      // console.log(this.adminCheck)
    }
    else{
      this.basicNavitems="adminnotlogged"
      this.admin="adminsuccess"
      
      // console.log(this.adminCheck)
    }  
     this.detectionRef.detectChanges();
  }
  
}
