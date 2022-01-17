import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

import { ProfileComponent } from './profile/profile.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'albums', component: MyAlbumsComponent },
  { path: 'create-album', component: CreateAlbumComponent },
  { path: 'album-details', component: AlbumDetailsComponent },
  { path: 'upload-picture', component: UploadPictureComponent },
  { path: 'photo-details', component: PhotoDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
