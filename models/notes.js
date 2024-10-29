const db = require('../config/db');

const getNotes = () => {
  const query = 'SELECT * FROM notes';
  return db.execute(query);
}
const getNoteById = (noteId) => {
  const query = `SELECT * FROM notes WHERE id = ${noteId}`;
  return db.execute(query);
}
const createNote = (payload) => {
  const query = `INSERT INTO notes (title, description) VALUES ('${payload.title}', '${payload.description}')`;
  return db.execute(query);
}
const updateNote = () => { }
const deleteNote = () => { }

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
}