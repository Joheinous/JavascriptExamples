function courseTableBuilder(array){
    let tableOutput = document.querySelector("#outputTable");
    for (let i = 0; i < array.length; i++) {
        console.log(tableOutput);
        let row = tableOutput.insertRow(-1);
    

        let cell1 = row.insertCell(0);
        cell1.innerText = array[i].courseName;
        let cell2 = row.insertCell(1);
        cell2.innerText = array[i].courseNum;
        let cell3 = row.insertCell(2);
        cell3.innerText = array[i].dept;
        
        let cell4 = row.insertCell(3);
        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${array[i].id}`;
        anchor.innerText = "Show Details";
        cell4.appendChild(anchor);
    }
}



function loadCourse(){
    fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((jsoned) => courseTableBuilder(jsoned));

}
loadCourse();

