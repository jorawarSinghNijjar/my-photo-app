import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../service/photo/photo.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumId: string | null;

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { 
    this.albumId = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.albumId = params.get('albumId');
        console.log("Album ID is: ", this.albumId);
      }
    )
    this.photoService.getAll().subscribe(
      response => {
        console.log("Photos", response);
      }
    );
  }

}
