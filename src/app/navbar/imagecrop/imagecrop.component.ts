import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-imagecrop',
  templateUrl: './imagecrop.component.html',
  styleUrls: ['./imagecrop.component.scss']
})
export class ImagecropComponent {
  constructor(private matDialogRef:MatDialogRef<ImagecropComponent>,private dataServiceRef:DataService){}
  image:any='';
  imageEvent:any=''
  ngOnInit(): void {
    this.imageEvent=this.dataServiceRef.imageFile;
    console.log(this.imageEvent)
    this.fileChangeEvent(this.imageEvent);
    
  }
//image crop
imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event:any): void {
  console.log(event)
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.dataServiceRef.croppedImage(this.croppedImage)
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}

//closePopup()
closePopup(){
this.matDialogRef.close();
}
}
