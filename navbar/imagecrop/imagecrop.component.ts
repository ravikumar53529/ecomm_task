import { Component,OnInit,OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-imagecrop',
  templateUrl: './imagecrop.component.html',
  styleUrls: ['./imagecrop.component.scss']
})
export class ImagecropComponent implements OnInit {

  image:any='';
  imageEvent:any=''
constructor(private dataServiceRef:DataService){}

ngOnInit(): void {
  console.log(this.image)
  this.image=this.dataServiceRef.imageCropUrl;
  this.imageEvent=this.dataServiceRef.imageFile;
  console.log(this.imageEvent)
  this.fileChangeEvent(this.imageEvent);
}

//image crop
imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
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
}
