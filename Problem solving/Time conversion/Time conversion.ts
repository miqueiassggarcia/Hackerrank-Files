function timeConversion(s: string): string {
  let [hours, minutes, seconds] = s.split(":");
  let isAfternoon = seconds.includes("PM");
  seconds = seconds.slice(0, -2);
  
  if(!isAfternoon && hours == "12") {
      hours = "00";
  } else if(isAfternoon && hours != "12") {
      hours = (parseInt(hours) + 12).toString();
  }
  
  return hours + ":" + minutes + ":" + seconds;
}