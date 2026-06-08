import express from "express";
import { calculateBMI } from "./bmiCalculator.ts";
import { calculate } from "./calculator.ts";
const app = express();
app.use(express.json());
app.get("/ping ", (_req, res) => {
  res.send("pong");

});

app.post("/calculate", (req, res) => {
  const { value1, value2, op } = req.body;
  const result = calculate(value1, value2, op);
  return res.send({ result });
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
