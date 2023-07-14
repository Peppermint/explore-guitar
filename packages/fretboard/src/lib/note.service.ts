import { Injectable } from '@angular/core';
import { Note, NoteAccidental, NoteName, NoteOctave } from './note/note.models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  generateChromaticNotes(root: Note, frets: number): Note[] {
    const chromaticNotes: Note[] = [root];
    let currentNote = { ...root };

    for (let i = 0; i < frets; i++) {
      currentNote = this.getNextNoteInSequence(currentNote);
      chromaticNotes.push(currentNote);
    }

    return chromaticNotes;
  }

  getNextNoteInSequence(note: Note): Note {
    let nextNote: Note;
    const { name, accidental, octave } = note;

    if (name === NoteName.E && accidental === NoteAccidental.Natural) {
      nextNote = {
        name: NoteName.F,
        accidental: NoteAccidental.Natural,
        octave,
      };
    } else if (name === NoteName.B && accidental === NoteAccidental.Natural) {
      nextNote = {
        name: NoteName.C,
        accidental: NoteAccidental.Natural,
        octave: octave + 1,
      };
    } else if (accidental === NoteAccidental.Sharp) {
      nextNote = this.getNextSharpNoteInSequence(name, octave);
    } else {
      nextNote = this.getNextNaturalNoteInSequence(name, accidental, octave);
    }

    return nextNote;
  }

  getNextSharpNoteInSequence(name: NoteName, octave: NoteOctave): Note {
    let nextNote: Note;

    switch (name) {
      case NoteName.C:
        nextNote = {
          name: NoteName.C,
          accidental: NoteAccidental.Sharp,
          octave,
        };
        break;
      case NoteName.D:
        nextNote = {
          name: NoteName.D,
          accidental: NoteAccidental.Sharp,
          octave,
        };
        break;
      case NoteName.F:
        nextNote = {
          name: NoteName.F,
          accidental: NoteAccidental.Sharp,
          octave,
        };
        break;
      case NoteName.G:
        nextNote = {
          name: NoteName.G,
          accidental: NoteAccidental.Sharp,
          octave,
        };
        break;
      case NoteName.A:
        nextNote = {
          name: NoteName.A,
          accidental: NoteAccidental.Sharp,
          octave,
        };
        break;
      default:
        throw new Error(`Invalid note: ${name}`);
    }

    return nextNote;
  }

  getNextNaturalNoteInSequence(
    name: NoteName,
    accidental: NoteAccidental,
    octave: NoteOctave
  ): Note {
    let nextNote: Note;

    switch (name) {
      case NoteName.C:
        nextNote = {
          name: NoteName.D,
          accidental: NoteAccidental.Flat,
          octave,
        };
        break;
      case NoteName.D:
        nextNote = {
          name: NoteName.E,
          accidental: NoteAccidental.Flat,
          octave,
        };
        break;
      case NoteName.E:
        nextNote = {
          name: NoteName.F,
          accidental: NoteAccidental.Natural,
          octave,
        };
        break;
      case NoteName.F:
        nextNote = {
          name: NoteName.G,
          accidental: NoteAccidental.Flat,
          octave,
        };
        break;
      case NoteName.G:
        nextNote = {
          name: NoteName.A,
          accidental: NoteAccidental.Flat,
          octave,
        };
        break;
      case NoteName.A:
        nextNote = {
          name: NoteName.B,
          accidental: NoteAccidental.Flat,
          octave,
        };
        break;
      case NoteName.B:
        nextNote = {
          name: NoteName.C,
          accidental: NoteAccidental.Natural,
          octave: octave + 1,
        };
        break;
      default:
        throw new Error(`Invalid note: ${name}`);
    }

    return nextNote;
  }
}
