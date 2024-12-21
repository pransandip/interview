function RomanNumeralReduction(str: string): string { 
  // code goes here  
  const numeralValues: Record<string, number> = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50, 
    X: 10,
    V: 5,
    I: 1,
  };

 // Initialize a variable 'sum' to store the decimal value of input roman numeral
 let sum = 0;

 // Split the input string into an array of charecters and iterate over each charecter
 str.split('').forEach(char => {
   // add the decimal value of current roman numerals to the sum
   sum += numeralValues[char]
 });

 // string output 'result'
 let result = '';

 // Iterate over 'numeralValues' object to convert the decimal value back into roman numerals
 Object.entries(numeralValues).forEach(value => {
   // Calculete how many times the current roman numeral can be used to represent the remaining 'sum'
   let num = Math.floor(sum / value[1]);
   console.log(num)
   // Substract the used portion of the 'sum' (num * value[1]) from the remaing 'sum
   sum -= num * value[1]

   // Append the current Roman numeral to the 'result' string, repeted 'num' times
   result += value[0].repeat(num);
 });

  return result; 

}
   
// keep this function call here 
// @ts-ignore
console.log(RomanNumeralReduction(readline()));