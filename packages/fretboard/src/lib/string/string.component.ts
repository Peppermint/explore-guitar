import { Component, Input } from '@angular/core';
import { Note } from '../note/note.models';

@Component({
  selector: 'exploreguitar-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
})
export class StringComponent {
  @Input() public root!: Note;
  @Input() public frets = 12;
}
