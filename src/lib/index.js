export const calcWPM = (str, secs = 60) =>
  Math.round((str.length / 5) * (60 / secs));
