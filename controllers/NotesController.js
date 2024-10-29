const notesModel = require('../models/notes');

const getNotes = async (req, res) => {
  try {
    const [result] = await notesModel.getNotes();
    return res.status(200).json({
      success: true,
      message: 'Notes retrieved successfully',
      data: result
    });
  } catch (err) {
    console.log(err);
  }
}
const getNoteById = () => { }
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