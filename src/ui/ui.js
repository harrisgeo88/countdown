import { font } from "../font";
import { secondsToHHMMSS } from "../timer";
import cliCursor from "cli-cursor";

export const stream = process.stdout;

export const exitHandler = () => {
  console.clear();
  cliCursor.show();
  process.exit();
};

export const clearScreen = () => {
  const { rows, columns } = stream;
  stream.moveCursor(columns, rows);

  for (let i = 0; i <= stream.rows; i++) {
    stream.moveCursor(0, -1);
    stream.clearLine(0);
  }
};

export const printTime = seconds => {
  clearScreen();
  stream.write(printSize()); // vertical
  for (let i = 0; i < 6; i++) {
    const time = secondsToHHMMSS(seconds);
    const spaces = printSize(false, seconds);
    stream.write(`${spaces}`);

    const start = seconds >= 3600 ? 0 : 3;

    for (let j = start; j < 8; j++) {
      stream.write(`${font[time[j]][i]}`);
    }
    stream.write("\n");
  }
  cliCursor.hide();
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
