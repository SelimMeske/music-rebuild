import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Song } from 'src/interfaces/song.interface';
import { environment } from '../environments/environment';
import { APIEndpoints } from '../app/api.endpoints';

@Injectable({
    providedIn: 'root'
})

export class BackendService {

    baseURL: String = environment.baseAPIUrl;
    songsEndpoint: string = `${this.baseURL}${APIEndpoints.songs}`;

    constructor(private http: HttpClient){

    }

    public getSongs() {
        return this.http.get<Song[]>(this.songsEndpoint);
    }
}