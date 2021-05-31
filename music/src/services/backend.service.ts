import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Song } from 'src/interfaces/song.interface';

@Injectable({
    providedIn: 'root'
})

export class BackendService {

    songsEndpoint: string = "http://127.0.0.1:8000/api/songs"

    constructor(private http: HttpClient){

    }

    public getSongs() {
        return this.http.get<Song[]>(this.songsEndpoint);
    }
}