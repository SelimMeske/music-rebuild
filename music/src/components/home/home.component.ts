import { Component } from '@angular/core';
import { SONGCARDS } from '../../app/song.mockup';


@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    songs = SONGCARDS;
}