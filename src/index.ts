const express = require("express");
const notesRoute = require("./routes/notesRoute");

const app = express();
app.use(express.json());

app.use("/notes", notesRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
