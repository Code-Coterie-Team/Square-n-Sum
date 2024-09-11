function squareSum(numbers){
       let sum = 0;
       let square = numbers.map((n) => n * n);
       sum = square.reduce((acc, current) => acc + current, 0);
       return sum; 
}

const numbers = [1,2,2];
console.log(squareSum(numbers));