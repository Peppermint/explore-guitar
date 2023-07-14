// Enum representing the possible note names
export enum NoteName {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
}

// Enum representing the possible note accidentals
export enum NoteAccidental {
  Flat = 'b',
  Natural = '',
  Sharp = '#',
}

// Enum representing the possible note octaves
export enum NoteOctave {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}

// Interface representing a note
export interface Note {
  name: NoteName;
  accidental: NoteAccidental;
  octave: NoteOctave;
}
