import { Component, OnInit } from '@angular/core';
import { Album } from '../model/Album';
import { AlbumService } from '../service/album/album.service';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.css']
})
export class RecentAlbumsComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe(response => {
      console.log("All album response", response);

      this.albums = <Album[]>response;
    })
  }

}
