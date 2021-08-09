console.log("00-objectball.js is loaded")

function gameObject() {
  const game = {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["black", "white"],
      "players": {
        "Alan Anderson": {
          "number": "0",
          "shoe": "16",
          "points": "22",
          "rebounds": "12",
          "assists": "12",
          "steals": "3",
          "blocks": "1",
          "slamDunks": "1"
        },
        "Reggie Evans": {
          "number": "30",
          "shoe": "14",
          "points": "12",
          "rebounds": "12",
          "assists": "12",
          "steals": "12",
          "blocks": "12",
          "slamDunks": "7"
        },
        "Brook Lopez": {
          "number": "11",
          "shoe": "17",
          "points": "17",
          "rebounds": "19",
          "assists": "10",
          "steals": "3",
          "blocks": "1",
          "slamDunks": "15"
        },
        "Mason Plumlee": {
          "number": "1",
          "shoe": "19",
          "points": "26",
          "rebounds": "12",
          "assists": "6",
          "steals": "3",
          "blocks": "8",
          "slamDunks": "5"
        },
        "Jason Terry": {
          "number": "31",
          "shoe": "15",
          "points": "19",
          "rebounds": "2",
          "assists": "2",
          "steals": "4",
          "blocks": "11",
          "slamDunks": "1"
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["turquoise", "purple"],
      "players": {
        "Jeff Adrien": {
          "number": "4",
          "shoe": "18",
          "points": "10",
          "rebounds": "1",
          "assists": "1",
          "steals": "2",
          "blocks": "7",
          "slamDunks": "2"
        },
        "Bismak Biyombo": {
          "number": "0",
          "shoe": "16",
          "points": "12",
          "rebounds": "4",
          "assists": "7",
          "steals": "7",
          "blocks": "15",
          "slamDunks": "10"
        },
        "DeSagna Diop": {
          "number": "2",
          "shoe": "14",
          "points": "24",
          "rebounds": "12",
          "assists": "12",
          "steals": "4",
          "blocks": "5",
          "slamDunks": "5"
        },
        "Ben Gordon": {
          "number": "8",
          "shoe": "15",
          "points": "33",
          "rebounds": "3",
          "assists": "2",
          "steals": "1",
          "blocks": "1",
          "slamDunks": "0"
        },
        "Brendan Haywood": {
          "number": "33",
          "shoe": "15",
          "points": "6",
          "rebounds": "12",
          "assists": "12",
          "steals": "22",
          "blocks": "5",
          "slamDunks": "12"
        }
      }
    }
  }
  return game
}

function allPlayers() {
  const allPlayers = {
    ...gameObject()["home"]["players"],
    ...gameObject()["away"]["players"]
  }
  return allPlayers
}

function getTeamObjFromGame(teamName) {
  const game = gameObject()
  if (teamName == game["home"]["teamName"]) {
    return game["home"]
  } else {
    return game["away"]
  }
}

function teamColors(teamName) {
  const team = getTeamObjFromGame(teamName)
  return team.colors
}

function numPointsScored(player) {
  return allPlayers()[player]["points"]
}

function shoeSize(player) {
  return allPlayers()[player]["shoe"]
}

function playerNumbers(teamName) {
  const players = getTeamObjFromGame(teamName).players
  const numbers = []
  for (const player in players) {
    numbers.push(players[player].number)
  }
  return numbers
}

function playerStats(playerName) {
  return allPlayers()[playerName]
}

function bigShoeRebounds() {
  const game = gameObject()
  let biggestShoe = [0, {}] // start at zero, empty object to eventually be a player
  for (let playerName in allPlayers()) {
    let player = allPlayers()[playerName]
    if (player.shoe > biggestShoe[0]) { // compare player's shoe to previous players shoe
      console.log(`Looking up ${playerName}`)
      biggestShoe[0] = player.shoe // if it's bigger, set the shoe size
      biggestShoe[1] = player // if it's bigger, set the player
    }
  }
  return biggestShoe[1].rebounds
}
