export const getRandomNumber = (min, max) => {
  if(max === undefined) {
    max = min
    min = 0;
  }

  return Math.floor(Math.random() * (max - min)) + min + 1;
}

