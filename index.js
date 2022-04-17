const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});

app.use((req, res, next) => {
  console.log("Fetching All Books ");
  next();
});
app.get("/books", (req, res, next) => {
  res.status(200);
  res.send("Good Work");
});
app.get("/books/:book", (req, res, next) => {
  let para = req.params;
  res.status(200).json({
    status: "success",
    bookName: para.book,
  });
  //   res.send(para.book);
});

//Server Starting
const PORT = 3002;
app.listen(PORT, () => {
  console.log("Server is starting");
});
