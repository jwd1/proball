var teamA;
var teamB;
var week = 0;
var searchVar = 0;


function nextTurn() {
  var northTableHTML = "";
  var southTableHTML = "";

  var northFixtureTableHTML = "";
  var southFixtureTableHTML = "";

  northTableHTML +='<th>Team</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>Points</th>';
  southTableHTML +='<th>Team</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>Points</th>';

  console.log('nextTurn was clicked');


// fixtures --- here we fucking go!!!!





var games = 0;

for (var a=1; a < teams.length; a +=1) {

    teamA = teams[a];


    if (teamA.league == "North") {

    for (b=1; b < teams.length; b +=1){
    teamB = teams[b];

      if (teamB.league == "North"){
      var searchVar = teamB.played.includes(teamA.name);



       if (searchVar == false) {
         console.log(teamA.name + " Vs " + teamB.name);
         teamB.played += " " + teamA.name;
         teamA.played += " " + teamB.name;

        // console.log(" ------- teamA played - " + teamA.played);
      //  console.log(" ------- teamB played - " + teamB.played);

          break;
        }

     } // if end


   } // team b for loop end

   games += 1;
   if (games == 4) {
     break;
   }


  } // if end

} // team a for loop end

week += 1;
console.log("Week " + week.toString());





  // sort teams into position for the league table

    for (var i=0; i < teams.length; i +=1 ) {
        team = teams[i];
        team.points = Math.floor((Math.random() * 30) + 1);
    }


    teams.sort(compare);
    teams.reverse();

    // update north league table

      for (var i=0; i <teams.length; i +=1) {

           team = teams[i];

           if (team.league == 'North') {
              northTableHTML += '<tr><td>' + team.name + '</td>';
              northTableHTML += '<td>' + team.wins + '</td>';
              northTableHTML += '<td>' + team.draws + '</td>';
              northTableHTML += '<td>' + team.losses + '</td>';
              northTableHTML += '<td>' + team.goalsFor + '</td>';
              northTableHTML += '<td>' + team.goalsAgainst + '</td>';
              northTableHTML += '<td>' + team.points + '</td></tr>';

           }

           document.getElementById('northTable').innerHTML = northTableHTML;
     }


     //update south fixture table


    for (var i=0; i <teams.length; i +=1) {

         team = teams[i];



         if (team.league == 'South') {
            southTableHTML += '<tr><td>' + team.name + '</td>';
            southTableHTML += '<td>' + team.wins + '</td>';
            southTableHTML += '<td>' + team.draws + '</td>';
            southTableHTML += '<td>' + team.losses + '</td>';
            southTableHTML += '<td>' + team.goalsFor + '</td>';
            southTableHTML += '<td>' + team.goalsAgainst + '</td>';
            southTableHTML += '<td>' + team.points + '</td></tr>';

         }

         document.getElementById('southTable').innerHTML = southTableHTML;
   }



} // function nextTurn


function compare(a,b) {
  if (a.points < b.points)
      return -1;
  if (a.points > b.points)
      return 1;
  return 0;
}
