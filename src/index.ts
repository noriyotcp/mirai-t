const [,, ...argStr] = process.argv;

function fizzbuzz(num : string[]) : string {
  return num.join('');
}

console.log(fizzbuzz(argStr));
