var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const spells = {
  "fire":  { "damage": 200, 1: 20, 2: 30, 3: 50 },
  "water": { "damage": 300, 1: 10, 2: 25, 3: 40 },
  "earth": { "damage": 400, 1: 25, 2: 55, 3: 70 },
  "air":   { "damage": 100, 1: 18, 2: 38, 3: 60 }
}

const spellsAmount = parseInt(lines.shift())
let enemySize, spellPos, spellInfo, startPos, endPos, damage, radius, diagonal1, diagonal2, diagonal3, diagonal4

for(let i = 0; i < spellsAmount; i++){
  enemySize = [parseInt(lines[0].split(" ")[0]), parseInt(lines[0].split(" ")[1])]
  startPos = [parseInt(lines[0].split(" ")[2]), parseInt(lines[0].split(" ")[3])]
  endPos = [startPos[0] + enemySize[0], startPos[1] + enemySize[1]]
  lines.shift()


  spellInfo = { "type": lines[0].split(" ")[0], "level": parseInt(lines[0].split(" ")[1])}
  spellPos = [parseInt(lines[0].split(" ")[2]), parseInt(lines[0].split(" ")[3])]
  lines.shift()

  damage = spells[spellInfo["type"]]["damage"]
  radius = spells[spellInfo["type"]][spellInfo["level"]]
  diagonal1 = Math.sqrt((startPos[0] - spellPos[0]) ** 2 + (startPos[1] - spellPos[1]) ** 2)
  diagonal2 = Math.sqrt((startPos[0] - spellPos[0]) ** 2 + ((startPos[1] + enemySize[1]) - spellPos[1]) ** 2)
  diagonal3 = Math.sqrt(((startPos[0] + enemySize[0]) - spellPos[0]) ** 2 + ((startPos[1] + enemySize[1]) - spellPos[1]) ** 2)
  diagonal4 = Math.sqrt(((startPos[0] + enemySize[0]) - spellPos[0]) ** 2 + (startPos[1] - spellPos[1]) ** 2)

  
  if((spellPos[0] >= startPos[0] - radius) && (spellPos[0] <= endPos[0] + radius) && (spellPos[1] >= startPos[1] - radius) && (spellPos[1] <= endPos[1] + radius)){
    if(((spellPos[0] >= startPos[0]) && (spellPos[0] <= endPos[0])) || ((spellPos[1] >= startPos[1]) && (spellPos[1] <= endPos[1])))
      console.log(damage)
    else if(diagonal1 <= radius || diagonal2 <= radius || diagonal3 <= radius || diagonal4 <= radius)
      console.log(damage)
    else
      console.log(0)
  }
  else
    console.log(0)
}