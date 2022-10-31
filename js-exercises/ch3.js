//following day
const day = String(prompt("Enter a day of the week: ")).toLowerCase();
switch(day) {
  case "mon":
  case "monday":
    console.log("The following day is Tuesday");
    break;
  case "tue":
  case "tuesday":
    console.log("The following day is Wednesday");
    break; 
  case "wed":
  case "wednesday":
    console.log("The following day is Thursday");
    break;
  case "thur":
  case "thursday":
    console.log("The following day is Friday");
    break;
  case "fri":
  case "friday":
    console.log("The following day is Saturday");
    break;
  case "sat":
  case "saturday":
    console.log("The following day is Sunday");
    break;
  case "sun":
  case "sunday":
    console.log("The following day is Monday");
    break;
  default:
    console.log("Invalid day name")
}