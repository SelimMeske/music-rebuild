import { Component, Input } from '@angular/core';
import { Song } from 'src/interfaces/song.interface';


@Component({
    selector: 'song-card-component',
    templateUrl: './song.card.component.html',
    styleUrls: ['song.card.component.css']
})

export class SongCardComponent {

    trigger: Boolean = false;

    @Input() song!: Song;

    constructor(){

    }

    onMouseIn(){
        this.trigger = true;
    }   
    
    onMouseOut(){
        this.trigger = false;
    }

    play(){
        console.log('hi')
    }
}