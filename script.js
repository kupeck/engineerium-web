//Server status
let requestURL = 'https://api.mcsrvstat.us/2/play.engineerium.eu';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const serverData = request.response;
    console.log(serverData)
    if(serverData["online"]) {
        var serverPlayerData = serverData["players"]
        var serverPlayerCount = serverPlayerData["online"]
        document.getElementById("player-number").innerHTML = serverPlayerCount
        if(serverPlayerCount == 0) {
            var playerCountWord = " Hráčů"
        } else if(serverPlayerCount == 1) {
            var playerCountWord = " Hráč";
        } else if(serverPlayerCount < 5) {
            var playerCountWord = " Hráči";
        } else {
            var playerCountWord = " Hráčů";
        }
        document.getElementById("player-number").innerHTML = serverPlayerCount + playerCountWord
        var serverDebugData = serverData["debug"]
        var serverCacheTime = serverDebugData["cachetime"]
        console.log(serverDebugData + " " + serverCacheTime)
        if(serverCacheTime == 0) {
            var cacheTimeWord = "!";
        } else {
            var cacheTimeWord = ".";
        }
        document.getElementById("player-number").innerHTML = serverPlayerCount + playerCountWord + cacheTimeWord
    } else {
        document.getElementById("play-number-heading").innerHTML = ""
        document.getElementById("player-number").innerHTML = "Vypadá to že server je offline.<br>Omlouváme se za způsobené nepříjemnosti."
    }
} //End of Server status