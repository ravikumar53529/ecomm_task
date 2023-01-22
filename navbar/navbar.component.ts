import { Component, AfterViewChecked,OnInit,ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { ImagecropComponent } from './imagecrop/imagecrop.component';
class ImageSnippet{
  constructor(public src:string,public file:File ){}
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewChecked,OnInit{
 admin:string | undefined;
 adminCheck: boolean = false;
 basicNavitems:string|undefined;

image:any="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
imageUrl:any; 
imageUpdated="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
selectedFile:ImageSnippet | undefined;
constructor(private dataServiceRef:DataService,private detectionRef:ChangeDetectorRef,private matDialogRef:MatDialog){

  }
  ngOnInit(): void { 
  }
  ngAfterViewChecked(): void {

    //thi
    this.imageUpdated=this.dataServiceRef.croppedPic;
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
      this.dataServiceRef.navbarImageResize(imageEvent)

  // // const file:File=imageInput.files[0];
  // // const reader=new FileReader();
  // // reader.addEventListener('load',(event:any)=>{
  // //   this.selectedFile=new ImageSnippet(event.target.result,file);
  // //   console.log(this.selectedFile.src)
  // //   this.image=this.selectedFile.src;
  // //   this.matDialogRef.open(ImagecropComponent)
  // //   this.dataServiceRef.navbarImageResize(this.image,event)
  // // })
  // reader.readAsDataURL(file);
 
  }

}
