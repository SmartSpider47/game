var selectVal = document.getElementById("id_select_1");
var games = document.getElementById("id_games");
var gamesCPP = document.getElementById("id_games_cpp");
var gamesWEB = document.getElementById("id_games_web");
var games2D = document.getElementById("id_games_2d");

ChangeGames();


function ChangeGames () {
	if (selectVal.value == "cpp") {
		games.innerHTML = gamesCPP.innerHTML;
	}else if (selectVal.value == "web") {
		games.innerHTML = gamesWEB.innerHTML;
	}else if (selectVal.value == "td") {
		games.innerHTML = games2D.innerHTML;
	}
}