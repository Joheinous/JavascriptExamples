function loadCourseDetails(object) {
  let tableOutput = document.querySelector("#outputTable");
  let row = tableOutput.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = object.courseName;
  let cell2 = row.insertCell(1);
  cell2.innerText = object.instructor;
  let cell3 = row.insertCell(2);
  cell3.innerText = object.courseNum;
  let cell4 = row.insertCell(3);
  cell4.innerText = object.dept;
  let cell5 = row.insertCell(4);
  cell5.innerText = object.startDate;
  let cell6 = row.insertCell(5);
  cell6.innerText = object.numDays + " Days";
}

function fetchCourseDetails(id) {
  fetch(`http://localhost:8081/api/courses/${id}`)
    .then((response) => response.json())
    .then((jsoned) => loadCourseDetails(jsoned));
}

window.addEventListener("load", (event) => {
  const urlParams = new URLSearchParams(location.search);

  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    fetchCourseDetails(id);
  }
});
