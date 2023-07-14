import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FretboardComponent } from './fretboard/fretboard.component';
import { StringComponent } from './string/string.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FretboardComponent,
    StringComponent,
    NoteComponent,
    NoteComponent,
  ],
  exports: [FretboardComponent],
})
export class FretboardModule {}
