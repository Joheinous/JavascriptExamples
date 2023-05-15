
   

   window.onload = function(){


        // let teams = ["Dallas Cowboys", "Denver Broncos", "Houston Texans", "Kansas City Chiefs"];
        // let code = ["DAL", "DEN", "HOU", "KAN", ]
        let teams = [
            {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
            {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
            {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
            {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
           ];

        const teamsList = document.getElementById("teamsList");

        let length = teams.length;
        for (let i = 0; i < length; i++) {
            let theOption = document.createElement("option");

            theOption.textContent = teams[i].name;
            theOption.value = teams[i].code;

            statesList.appendChild(theOption);
        }
   }
