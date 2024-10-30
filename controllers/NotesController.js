const notesModel = require('../models/notes');
const validateNote = require('../utils/validator/validateNote');

const getNotes = async (req, res, next) => {
  try {
    const [result] = await notesModel.getNotes();
    res.status(200).json({
      success: true,
      message: 'Notes retrieved successfully',
      data: result
    });
  } catch (err) {
    next(err)
  }
}
const getNoteById = async (req, res, next) => {
  try {
    const [result] = await notesModel.getNoteById(req.params.id);
    if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Note retrieved successfully',
      data: result[0]
    });
  } catch (err) {
    next(err)
  }
}
const createNote = async (req, res, next) => {
  validateNote(req, res);

  try {
    const [result] = await notesModel.createNote({
      title: req.body.title,
      description: req.body.description
    });
    res.status(201).json({
      success: true,
      message: 'Note created successfully',
      data: {
        id: result.insertId,
        title: req.body.title,
        description: req.body.description
      }
    });
  } catch (err) {
    next(err)
  }
}
const updateNote = async (req, res, next) => {
  validateNote(req, res);

  try {
    const [result] = await notesModel.updateNote({
      title: req.body.title,
      description: req.body.description
    }, req.params.id);

    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Note updated successfully',
    });
  } catch (err) {
    next(err)
  }
}
const deleteNote = async (req, res, next) => {
  try {
    const [result] = await notesModel.deleteNote(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Note deleted successfully',
    });
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
}