import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutesModule } from './app.routes';

//Services
import { SpotifyService } from './services/spotify/spotify.service';

//Components
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ContactComponent,
    HomeComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
