import express from "express";
import { calculateBMI } from "./bmiCalculator.ts";
import { calculate, type Operation } from "./calculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";
const app = express();
app.use(express.json());


app.post("/calculate", (req, res) => {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { value1, value2, op } = req.body;
  const result = calculate(Number(value1), Number(value2), op as Operation);
  return res.send({ result });
});
 
app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight || isNaN(height) || isNaN(weight)) {
    res.status(400).json({
      error: "malformatted parameters",
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

app.post("/exercises", (req, res) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any  
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    res.status(400).json({
      error: "parameters missing",
    });
    return;
  }
    if(!Array.isArray(daily_exercises) || isNaN(Number(target))) {
      res.status(400).json({
        error: "malformatted parameters",
      });
      return;
    }
    //convert to number array
  const execercises = daily_exercises.map((d) => Number(d));
   
  const targetNum = Number(target);
  if (execercises.some(isNaN) || isNaN(targetNum)) {
    return res.status(400).json({
      error: "malformatted parameters",
    });
  }
  const result = calculateExercises(execercises, targetNum);
  return res.json(result);
});
 
 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
