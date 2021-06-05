import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/services/player.service';

declare var WaveSurfer: any;

@Component({
    selector: 'player-component',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
    
    wavesurfer: any;
    audio_link: String = "";
    audio_data_string: String = "";
    audio_data_list: String[] = [];
    button_text: String = "Play";
    host_link: String = "http://127.0.0.1:8000";

    constructor(private playerService: PlayerService) {
        this.playerService.songListener().subscribe( song_data => {

            if(this.audio_link == song_data.audio) {
                this.playPause();
                return;
            }

            this.audio_link = song_data.audio;
            this.audio_data_string = song_data.audio_data;
            this.play();
        });
    }

    ngOnInit(){
        this.wavesurfer = WaveSurfer.create({
            container: '.waveform',
            scrollParent: false,
            barWidth: 3,
            barHeight: 1,
            barGap: null,
            height: 30,
            fillParent: true,
            responsive: false,
            pixelRatio: 1,
            partialRender: true,
            waveColor: '#0d6efd',
            progressColor: '#4B0082',
            interact: true,
            backend: 'MediaElement'
        });
    }

    playPause() {
        this.wavesurfer.playPause();

        this.wavesurfer.on('pause', () => {
            this.button_text = "Play";
        });

        this.wavesurfer.on('play', () => {
            this.button_text = "Pause";
        });
    }

    play() {
        this.wavesurfer.destroy();

        this.wavesurfer = WaveSurfer.create({
            container: '.waveform',
            scrollParent: false,
            barWidth: 3,
            barHeight: 1,
            barGap: null,
            height: 30,
            fillParent: true,
            responsive: false,
            pixelRatio: 1,
            partialRender: true,
            waveColor: '#0d6efd',
            progressColor: '#4B0082',
            interact: true,
            backend: 'MediaElement'
        });
        
        // Parse the audio data
        this.audio_data_list = this.audio_data_string.replace('[', '').replace(']', '').split(",");
        let intlist = this.audio_data_list.map(x=>+x);

        this.wavesurfer.load(this.host_link + '' + this.audio_link, intlist);

        this.wavesurfer.playPause();

        this.wavesurfer.on('pause', () => {
            this.button_text = "Play";
        });

        this.wavesurfer.on('play', () => {
            this.button_text = "Pause";
        });
    }

}