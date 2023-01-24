import { Component, AfterViewChecked,OnInit,ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { ImagecropComponent } from './imagecrop/imagecrop.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewChecked,OnInit{
 admin:string | undefined;
 adminCheck: boolean = false;
 basicNavitems:string|undefined;
 //imagecropp
  imageUpdated="https://media.istockphoto.com/vectors/businessman-profile-shopping-and-ecommerce-background-pattern-vector-id953840568?k=6&m=953840568&s=170667a&w=0&h=GCsJi0INligI_7aUTscT28OQB6PN-XZYSvLSLCIwXL0=";
  constructor(private dataServiceRef:DataService,private detectionRef:ChangeDetectorRef,private matDialogRef:MatDialog){

  }
  ngOnInit(): void { 
  
  }
  ngAfterViewChecked(): void {
    //imagecropped pic
    if(this.dataServiceRef.croppedPic){
      this.imageUpdated=this.dataServiceRef.croppedPic;
    }
 
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


  //imageCrop
  imageCrop(imageEvent:any){
    this.matDialogRef.open(ImagecropComponent);
    this.dataServiceRef.navbarImageResize(imageEvent )
     
  }
}
  

