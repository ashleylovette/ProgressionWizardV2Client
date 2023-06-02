export class ChordRef {
  name: string;
  notes: string[];

  constructor(name: string, notes: []) {
    this.name = name;
    this.notes = notes;
  }
}
