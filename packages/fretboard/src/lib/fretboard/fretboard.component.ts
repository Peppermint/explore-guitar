import { Component } from '@angular/core';
import {
  Note,
  NoteAccidental,
  NoteName,
  NoteOctave,
} from '../note/note.models';

@Component({
  selector: 'exploreguitar-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css'],
})
export class FretboardComponent {
  strings: Note[] = [
    {
      name: NoteName.E,
      accidental: NoteAccidental.Natural,
      octave: NoteOctave.Four,
    },
    {
      name: NoteName.B,
      accidental: NoteAccidental.Natural,
      octave: NoteOctave.Four,
    },
    {
      name: NoteName.G,
      accidental: NoteAccidental.Natural,
      octave: NoteOctave.Three,
    },
    {
      name: NoteName.D,
      accidental: NoteAccidental.Natural,
      octave: NoteOctave.Three,
    },
    {
      name: NoteName.A,
      accidental: NoteAccidental.Natural,
      octave: NoteOctave.Three,
    },
    {
      name: NoteName.E,
      accidental: NoteAccidental.Natural,
      octave: NoteOctave.Two,
    },
  ];
}
