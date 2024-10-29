const notesModel = require('../models/notes');

const getNotes = async (_, res) => {
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
const getNoteById = async (req, res) => {
  try {
    const [result] = await notesModel.getNoteById(req.params.id);
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Note retrieved successfully',
      data: result[0]
    });
  } catch (err) {
    console.log(err);
  }
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