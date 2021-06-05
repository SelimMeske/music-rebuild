import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../../interfaces/song.interface';
import { BackendService } from '../../services/backend.service';


@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    songs: Song[] = [];
    getSongObservable: Subject<Song[]> = new Subject;

    constructor(private backendService: BackendService){
        this.getSongs()
    }

    getSongs() {
        this.backendService.getSongs()
        .subscribe((data: Song[]) => this.songs = data)
    }
}