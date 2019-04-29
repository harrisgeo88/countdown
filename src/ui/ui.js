import { font } from "../font";
import { secondsToHHMMSS } from "../timer";

export const printTime = seconds => {
  console.clear();
  console.log(printSize());
  for (let i = 0; i < 6; i++) {
    const time = secondsToHHMMSS(seconds);
    let output = printSize(false, seconds);
    if (time[0] !== "0" || time[1] !== "0") {
      output += font[time[0]][i] + font[time[1]][i] + font[time[2]][i];
    }

    output +=
      font[time[3]][i] +
      font[time[4]][i] +
      font[time[5]][i] +
      font[time[6]][i] +
      font[time[7]][i];
    console.log(output);
  }
  console.log(printSize());
};

export const position = (vertical = true) => {
  const { columns, rows } = process.stdout;
  const axis = vertical ? rows : columns;

  return axis / 2;
};

export const spacer = (vertical = true) => {
  return vertical ? "\n" : " ";
};

export const getDiff = (vertical = true, seconds = 0) => {
  // when 1 hour or more
  if (!vertical && seconds >= 3600) {
    return 25;
  } else if (vertical) {
    return 3;
  } else {
    return 20;
  }
};

export const printSize = (vertical = true, seconds = 0) => {
  const size = Math.ceil(position(vertical) - getDiff(vertical, seconds));
  let output = "";
  for (var i = 0; i < size; i++) {
    output += spacer(vertical);
  }
  return output;
};
