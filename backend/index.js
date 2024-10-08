const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db");
const Note = require("./models/Note");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

connectDB();

Note.sync();

app.get("/notes", async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
});

app.post("/notes", async (req, res) => {
  const newNote = await Note.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.json(newNote);
});

app.put("/notes/:id", async (req, res) => {
  await Note.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    { where: { id: req.params.id } }
  );
  res.json({ message: "Note updated" });
});

app.delete("/notes/:id", async (req, res) => {
  await Note.destroy({ where: { id: req.params.id } });
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
