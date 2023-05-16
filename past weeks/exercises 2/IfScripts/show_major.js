var studentName, studentMajor, majorCode, aLocation;

studentName = "Bob";
majorCode = "MKT";

if (majorCode=="BIOL"){
    studentMajor="Biology";
    aLocation="Science Building, Room 310";
}
else if (majorCode=="CSCI"){
    studentMajor="Computer Science";
    aLocation="Sheppard Hall, Room 314";
}
else if (majorCode=="ENG"){
    studentMajor="English";
    aLocation="Kerr Hall, Room 201";
}
else if (majorCode=="HIST"){
    studentMajor="History";
    aLocation="Kerr Hall, Room 114";
}
else if (majorCode=="MKT"){
    studentMajor="Marketing";
    aLocation="Westly Hall, Room 310";
}
else {
    studentMajor="Not Enrolled";
    aLocation="Your mom's basement";
}

console.log("Student: " + studentName);
console.log("Major: " + studentMajor);
console.log("Advising Location: " + aLocation);