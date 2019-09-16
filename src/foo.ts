export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);
export const printSum = (...a: number[]) => {
  console.log(sum(...a));
};
