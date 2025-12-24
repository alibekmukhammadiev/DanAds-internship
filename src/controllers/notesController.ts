const { notes } = require("../models/noteModel");
import type { Request, Response } from "express";
import type { Note } from "../models/notesModel";

// GET all notes

const getNotes = (req: Request, res: Response) => {
  try {
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET single note by id

const getNoteById = (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    if (!idParam) {
      return res.status(400).json({ error: "ID parameter is required" });
    }

    const id = parseInt(idParam);

    const note = notes.find((n: Note) => n.id === id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST creating note

const createNote = (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const newNote = {
      id: notes.length + 1,
      title,
      content,
    };

    notes.push(newNote);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
// PUT updating note

const updateNote = (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;

    if (!idParam) {
      return res.status(400).json({ error: "ID parameter is required" });
    }

    const id = parseInt(idParam);

    const note = notes.find((n: Note) => n.id === id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    const { title, content } = req.body;

    if (!title && !content) {
      return res
        .status(400)
        .json({ error: "Title or content required to update" });
    }

    if (title) note.title = title;
    if (content) note.content = content;

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE deleting note

const deleteNote = (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    if (!idParam) {
      return res.status(400).json({ error: "ID parameter is required" });
    }

    const id = parseInt(idParam);
    const index = notes.findIndex((n: Note) => n.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Note not found" });
    }

    notes.splice(index, 1);

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };
