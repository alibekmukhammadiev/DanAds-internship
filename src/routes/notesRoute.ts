const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} = require("../controllers/notesController");

// GET all notes
router.get("/", getNotes);

// GET single note by id
router.get("/:id", getNoteById);

// POST creating note
router.post("/", createNote);

// PUT updating note
router.put("/:id", updateNote);

// DELETE deleting note
router.delete("/:id", deleteNote);

// GET searching note
router.get("/search", searchNotes);

module.exports = router;
