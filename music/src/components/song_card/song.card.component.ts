import { Component, Input } from '@angular/core';
import { Song } from 'src/interfaces/song.interface';
import { PlayerService } from 'src/services/player.service';


@Component({
    selector: 'song-card-component',
    templateUrl: './song.card.component.html',
    styleUrls: ['song.card.component.css']
})

export class SongCardComponent {

    trigger: Boolean = false;

    @Input() song!: Song;

    constructor(private playerService: PlayerService){
        
    }

    onMouseIn(){
        this.trigger = true;
    }   
    
    onMouseOut(){
        this.trigger = false;
    }

    play(song: Song){
        this.playerService.changeSong(song);
    }
}