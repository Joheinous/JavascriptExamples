let userName = "Jeff big boy";

function parseAndDisplayName(fullName) {
  console.log("Name: " + fullName);

  let array1 = fullName.split(" ");

  if (array1.length == 1) {
    console.log("Only Name: " + array1[0]);
  } else if (array1.length == 2) {
    console.log("First Name: " + array1[0]);
    console.log("Last Name: " + array1[1]);
  } else if (array1.length == 3) {
    console.log("First Name: " + array1[0]);
    console.log("Middle Name: " + array1[1]);
    console.log("Last Name: " + array1[2]);
  } else {
    console.log("Name is too long");
  }
}

parseAndDisplayName(userName);
