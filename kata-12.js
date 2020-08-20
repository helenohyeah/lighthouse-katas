/* given a list of instructors, create a single object in the following format:
{
  CourseName: [instructors]
} */

const organizeInstructors = function (instructors) {
  let obj = {};
  let temp = [];
  for (instructor of instructors) {
    if (temp.indexOf(instructor.course) === -1) {
      temp.push(instructor.course);
      obj[instructor.course] = getNames(instructor.course, instructors);
    }
  }
  return obj;
};

function getNames(course, instructors) {
  let names = [];
  for (instructor of instructors) {
    if (instructor.course === course) {
      names.push(instructor.name);
    }
  }
  return names;
}

// Testing
console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
/* {
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
} */


console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
/* {
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
} */