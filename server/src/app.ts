import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({
    message: "TaskFlow Pro API Running"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
