import express from "express";
import { calculateBMI } from "./bmiCalculator.js";
const app = express();

app.get("/ping ", (_req, res) => {
  res.send("pong");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight || isNaN(height) || isNaN(weight)) {
    res.status(400).json({
      error: "malformed parameter",
    });
    return;
  }
  const bmi = calculateBMI(height, weight);
  res.json({
    weight,
    height,
    bmi,
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
