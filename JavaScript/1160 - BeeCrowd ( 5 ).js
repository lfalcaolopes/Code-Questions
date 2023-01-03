var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const iterations = lines.shift()

lines.forEach((row) => {
  editedRow = row.split(" ").map(Number);
  let years = 0
  let aPopulation = editedRow[0]
  let bPopulation = editedRow[1]
  let aGrowth = editedRow[2]
  let bGrowth = editedRow[3] 

  while(bPopulation >= aPopulation){
    aPopulation = Math.floor(aPopulation * ((aGrowth / 100) + 1))
    bPopulation = Math.floor(bPopulation * ((bGrowth / 100) + 1))
    years++

    // console.log(aPopulation)
    // console.log(bPopulation)

    if(years > 100){
      break
    }
  }

  if(years <= 100){
    console.log(years + " anos.")
  }
  else{
    console.log("Mais de 1 seculo.")
  }
})