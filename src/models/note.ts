// dummy database
export interface Note {
  id: number;
  title: string;
  content: string;
}
const notes: Note[] = [];

module.exports = { notes };
