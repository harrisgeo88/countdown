import { timerToSeconds } from "./timer";
import { printTime } from "./ui";

console.clear();
let timer = process.argv[2];
let t = timerToSeconds(timer);

const countdown = setInterval(function() {
  console.clear();
  printTime(t);
  t--;

  if (t == -1) {
    console.clear();
    clearInterval(countdown);
  }
}, 1000);
