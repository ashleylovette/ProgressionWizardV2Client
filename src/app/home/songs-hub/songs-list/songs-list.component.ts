import {Component, OnInit} from '@angular/core';
import {CustomSong} from '../../../shared/models/custom-song';
import {BehaviorSubject} from 'rxjs';
import {ChordRef} from '../../../shared/models/chord-ref.model';

@Component({
    selector: 'app-songs-list',
    template: `
        <div>
            <mat-card class="songs-list selectable" *ngFor="let song of songs">
                <div class="first-row">
                    <span class="song-name">{{song.songName}}</span>
                    <span class="username">{{song.user}}</span>
                </div>
                <div class="second-row">
                    <span class="key">
                        <span class="detail-label">Key: </span> {{song.key}}
                    </span>
                    <span class="bpm">
                        <span class="detail-label">BPM: </span> {{song.bpm}}
                    </span>
                    <span class="interactions">
                        <mat-icon class="not-liked thumbs-up" *ngIf="!songLiked()">thumb_up</mat-icon>
                        <mat-icon class="comment"> comment</mat-icon>
                    </span>
                </div>
            </mat-card>
        </div>`,
    styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
    songs: CustomSong[] = [{
        songName: 'Liquid Confidence',
        chords: [
            new ChordRef('Cadd9', ['C', 'E', 'G']),
            new ChordRef('GM', ['G', 'B', 'D']),
            new ChordRef('Em', ['E', 'G', 'B']),
            new ChordRef('Am', ['A', 'C', 'E'])],
        user: 'ashleylovette',
        bpm: 80,
        key: 'C major',
        comments: []
    }];

    constructor() {
    }

    ngOnInit(): void {
    }

    songLiked(): boolean {
        return false;
    }

}
