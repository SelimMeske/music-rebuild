import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Song } from "src/interfaces/song.interface";

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    songSubject = new Subject<Song>();

    songListener() {
        return this.songSubject.asObservable();
    }

    changeSong(song: Song){
        this.songSubject.next(song);
    }
}