import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { Note, NoteAccidental, NoteName } from './note/note.models';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate chromatic notes', () => {
    const root: Note = {
      name: NoteName.A,
      accidental: NoteAccidental.Natural,
      octave: 2,
    };

    const frets = 12;
    const chromaticNotes = service.generateChromaticNotes(root, frets);
    expect(chromaticNotes.length).toBe(13);
    expect(chromaticNotes[0]).toEqual(root);
    expect(chromaticNotes[1]).toEqual({
      name: 'A',
      accidental: '#',
      octave: 2,
    });
    expect(chromaticNotes[2]).toEqual({
      name: 'B',
      accidental: '',
      octave: 2,
    });
    expect(chromaticNotes[3]).toEqual({
      name: 'C',
      accidental: '',
      octave: 3,
    });
    expect(chromaticNotes[4]).toEqual({
      name: 'C',
      accidental: '#',
      octave: 3,
    });
    expect(chromaticNotes[5]).toEqual({
      name: 'D',
      accidental: '',
      octave: 3,
    });
    expect(chromaticNotes[6]).toEqual({
      name: 'D',
      accidental: '#',
      octave: 3,
    });
    expect(chromaticNotes[7]).toEqual({
      name: 'E',
      accidental: '',
      octave: 3,
    });
  });
});
