export type Operation = 'add' | 'multiply' | 'divide';
export const calculate = (a: number, b: number, operation: Operation): number =>{
    switch (operation) {
        case 'add':
            return a + b;  
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            throw new Error('Invalid operation，Operation is not multiply, add or divide!');
    }
}

try{

 console.log(calculate(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
