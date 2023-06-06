let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   
   console.log(academyMembers.find((array)=>array.memID == "187").name);

   console.log(" ");

   let arrayActors = academyMembers.filter((array)=>array.films.length > 2).map(a => a.name);

   arrayActors.forEach(a => console.log(a));


   console.log(" ");

 let startsWith  = academyMembers.filter((array)=>array.name.startsWith("Bob") == true).map(a => a.name)
   
   startsWith.forEach(a=>console.log(a));

   console.log(Date.now());
   
//    console.log());


//    function filmNumber {
//     if (academyMembers.filter((array)=>array.films.length > 2))
//         console.log(academyMembers.findIndex);
//    }