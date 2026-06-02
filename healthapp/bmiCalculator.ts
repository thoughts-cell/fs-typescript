const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal range";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

try {
  if (process.argv.length !== 4) {
    throw new Error("Usage：npm run bmiCalculator <height> <weight>");
  }
  const height = Number(process.argv[2]);
  const weight = Number(process.argv[3]);

  if (isNaN(height) || isNaN(weight)) {
    throw new Error("input must be numbers ");
  }
  console.log(calculateBMI(height, weight));
} catch (error: unknown) {
  let errorMessage = "Something went wrong";

  if (error instanceof Error) {
    errorMessage += ": " + error.message;
  }

  console.log(errorMessage);
}
