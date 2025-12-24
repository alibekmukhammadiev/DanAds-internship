const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
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

module.exports = router;
