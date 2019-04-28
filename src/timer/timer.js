// 3710 to 01:01:50
export const secondsToHHMMSS = time => {
  var sec_num = parseInt(time, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

// seconds + (minutes*60) + (hours*60*60)
export const timerToSeconds = timer => {
  const match = /[s]|[ms]|[hms]/;
  if (!match.test(timer)) {
    return "Invalid date";
  }

  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let remainingTime = timer;
  let split = [];
  if (timer.includes("h")) {
    split = remainingTime.split("h");
    hours = Number(split[0]);
    remainingTime = split[1];
  }
  if (timer.includes("m")) {
    split = remainingTime.split("m");
    minutes = Number(split[0]);
    remainingTime = split[1];
  }
  if (timer.includes("s")) {
    split = remainingTime.split("s");
    seconds = Number(split[0]);
  }

  return hours * 3600 + minutes * 60 + seconds;
};
