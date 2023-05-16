let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

   //When does the PROG200 course start?
   function courseStartDates(arrayValue) {
    if (arrayValue.CourseId == "PROG400") {
        return true;
    }
    else {
        return false;
    }
   }

   let startDate = courses.findIndex(courseStartDates);

   if (startDate != -1) {
    console.log("The start date of the course is: " + courses[startDate].StartDate);
   }
   else{
    console.log("No course has that name.");
   }

   //What is the title of the PROJ500 course?
console.log(" ");
   function courseTitle(arrayValue) {
    if (arrayValue.CourseId == "PROJ500") {
        return true;
    }
    else {
        return false;
    }
   }

   let courseIdTitle = courses.findIndex(courseTitle);

   if (courseIdTitle != -1) {
    console.log("The title of the course is: " + courses[courseIdTitle].Title);
   }
   else{
    console.log("No course has that name.");
   }

   //What are the titles of the courses that cost $50 or less?
console.log(" ");

   function lessThan50(arrayValue) {
    if (arrayValue.Fee <= 50) {
        return true;
    }
    else {
        return false;
    }
   }
   let underFifty = courses.filter(lessThan50);

   if (underFifty.length > 0) {
    console.log("The course that cost $50 or less are:");
    for (let i = 0; i < underFifty.length; i++) {
        console.log(underFifty[i].Title);
       }
   }
   else {
    console.log("No courses under $50.");
   }

   //What classes meet in Classroom 1?
console.log(" ");

   function inClassroom(arrayValue) {
    if (arrayValue.Location == "Classroom 1") {
        return true;
    }
    else {
        return false;
    }
   }
   let location = courses.filter(inClassroom);

   if (location.length > 0) {
    console.log("The classes in the location Classroom 1 are: ");
    for (let i = 0; i < location.length; i++) {
        console.log(location[i].Title);
       }
   }
   else {
    console.log("No courses in that location");
   }