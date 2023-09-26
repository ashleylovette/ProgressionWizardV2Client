export class ChordRef {
  name: string;
  notes: string[] = [];

  constructor(name: string, notes: [string, string, string]) {
    this.name = name;
    this.notes = notes;
  }
}
