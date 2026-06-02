import { win32 } from "path/win32";
import { isInt32Array } from "util/types";

interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
const calculateExercises = (
  dailyhours: number[],
  target: number,
): ExerciseResult => {
  const periodLength = dailyhours.length;
  const trainingDays = dailyhours.filter((h) => h > 0).length;

  const sum = dailyhours.reduce((acc, cur) => acc + cur, 0);
  const average = sum / periodLength;
  const success = average >= target;
  const rating = success ? 3 : average >= target / 2 ? 2 : 1;
  const ratingDescription = success
    ? "Great job!"
    : average >= target / 2
      ? "Not too bad but could be better"
      : "You need to work harder";

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));

try {
  if (process.argv.length < 4) {
    throw new Error("Usage:npm  run exercise <target> <daily hours...>");
  }
  const target = Number(process.argv[2]);
  const dailyhours = process.argv.slice(3).map(Number);

  if ([target, ...dailyhours].some(isNaN)) {
    throw new Error("all arguments must be numbers");
  }
  console.log(calculateExercises(dailyhours, target));
} catch (error: unknown) {
  let errorMessage = "Something went wrong";

  if (error instanceof Error) {
    errorMessage += ": " + error.message;
  }

  console.log(errorMessage);
}
