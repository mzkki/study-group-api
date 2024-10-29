const db = require('../config/db');

const getNotes = () => {
  const query = 'SELECT * FROM notes';
  return db.execute(query);
}
const getNoteById = (noteId) => {
  const query = `SELECT * FROM notes WHERE id = ${noteId}`;
  return db.execute(query);
}
const createNote = () => { }
const updateNote = () => { }
const deleteNote = () => { }

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
}