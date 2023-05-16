let academyMembers = [
    {
    memID: 101,
    nameFull: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    nameFull: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    nameFull: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    nameFull: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   function searchById(array, search) {
    for (let i = 0; i < array.length; i++){
        if (array[i].memID == search){
            console.log("Member ID " + search + " is " + array[i].nameFull);
        }
    } 

   }

   function searchByFilmNumber(array, search) {
    for (let i = 0; i < array.length; i++){
        if (array[i].films.length >= search){
            console.log(array[i].nameFull + " has been in at least 3 films.");
        }
    } 

   }

   function searchByName(array, search) {
    for (let i = 0; i < array.length; i++){
        if (array[i].nameFull.includes(search)){
            console.log(array[i].nameFull + " starts with " + search);
        }
    }

   }

   function searchByFilmLetter(array, search) {
    for (let i = 0; i < array.length; i++){ 
        for (let j = 0; j < array[i].films.length; j++){
            let film = array[i].films[j];
        
            if (film.startsWith(search)){
                console.log(array[i].films[j] + " starts with " + search);
            }
        }
    }

   }

   searchById(academyMembers, 187);
   console.log(" ");
   searchByFilmNumber(academyMembers, 3);
   console.log(" ");
   searchByName(academyMembers, "Bob");
   console.log(" ");
   searchByFilmLetter(academyMembers, "A");
