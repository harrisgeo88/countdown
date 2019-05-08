import { timerToSeconds } from "./timer";
import { printTime, stream, clearScreen, exitHandler } from "./ui";
import readline from "readline";

clearScreen();
let timer = process.argv[2];
let t = timerToSeconds(timer);

//do something when app is closing
process.on("exit", () => exitHandler());

//catches ctrl+c event
process.on("SIGINT", () => exitHandler());

let isPaused = false;

// TODO: cleanup & pause on milliseconds
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  const { name, ctrl } = key;

  if ((ctrl && name === "c") || name === "escape") {
    process.exit();
  } else if (name === "space") {
    isPaused = !isPaused;
  }
});

const countdown = setInterval(function() {
  if (!isPaused) {
    printTime(t);
    t--;

    if (t == -1) {
      process.exit();
    }
  }
}, 1000);
