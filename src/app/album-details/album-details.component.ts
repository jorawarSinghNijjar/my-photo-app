import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo/photo.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getAll().subscribe(
      response => {
        console.log("Photos", response);
      }
    );
  }

}
