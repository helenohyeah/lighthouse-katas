// given list of instructors determine which has the longest name

const instructorWithLongestName = function(instructors) {
  let nameLength = 0;
  let instructorWithLongestName;
  instructors.forEach((instructor) => {
    if (instructor.name.length > nameLength) {
      nameLength = instructor.name.length;
      instructorWithLongestName = instructor;
    }
  });
  return instructorWithLongestName;
};

// testing
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); // {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); //{name: "Domascus", course: "Web"}