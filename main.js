var teamA;
var teamB;

var searchVar = 0;


function nextTurn(nsFlag) {
  // nsflag = North south flag - was north or south league clicked
  var northTableHTML = "";
  var southTableHTML = "";

  var northFixtureTableHTML = "";
  var southFixtureTableHTML = "";

  northTableHTML ='<th>Team</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>Points</th>';
  southTableHTML ='<th>Team</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>Points</th>';



  console.log('nextTurn was clicked');
  if(nsFlag==1){
      console.log('ns =1 - North!');
  }


  // sort teams into position for the league table

    for (var i=0; i < teams.length; i +=1 ) {
        team = teams[i];
        team.points = Math.floor((Math.random() * 30) + 1);
    }


    teams.sort(compare);
    teams.reverse();

    // update north league table

    if (nsFlag==1){

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
             // update table
             document.getElementById('leagueDisplay').innerHTML = "<h3>North Leauge</h3";
             document.getElementById('leagueTable').innerHTML = northTableHTML;
      } // end of for loop
   } else {

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

             document.getElementById('leagueDisplay').innerHTML = "<h3>South Leauge</h3>";
             document.getElementById('leagueTable').innerHTML = southTableHTML;
       }

    }

} // function nextTurn


function fixtures() {
  console.log('Fixtures clicked!!!')
    fixturesHTML = "";
    var fix = "";
    fixWeek = 1;
    fixLeague = "North";

    for(var i=0; i < 8; i +=1){
        fix = fixtures[i];
        console.log(JSON.stringify(fixtures[i]));
    //    console.log('fixtures week = '+fix.week+' fixLeague = ' + fixLeague);
        if (fix.week == fixWeek && fixLeague == 'North'){
            console.log('if logic detected!!')
            fixturesHTML += '<tr><td>' + fix.week + '</td></tr>';
            fixturesHTML += '<tr><td>' + fix.game1 + '</td></tr>';
            fixturesHTML += '<tr><td>' + fix.game2 + '</td></tr>';
            fixturesHTML += '<tr><td>' + fix.game3 + '</td></tr>';
            fixturesHTML += '<tr><td>' + fix.game4 + '</td></tr>';
        }

        document.getElementById('leagueTable').innerHTML = fixturesHTML;
    }

}




function compare(a,b) {
  if (a.points < b.points)
      return -1;
  if (a.points > b.points)
      return 1;
  return 0;
}
