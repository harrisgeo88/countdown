import { timerToSeconds } from "./timer";
import { printTime, stream, clearScreen, exitHandler } from "./ui";

clearScreen();
let timer = process.argv[2];
let t = timerToSeconds(timer);

//do something when app is closing
process.on("exit", () => exitHandler());

//catches ctrl+c event
process.on("SIGINT", () => exitHandler());

const countdown = setInterval(function() {
  printTime(t);
  t--;

  if (t == -1) {
    process.exit();
  }
}, 1000);
