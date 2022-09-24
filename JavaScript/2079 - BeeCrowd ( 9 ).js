var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');


while (lines.length > 0) {
   const coinsAmount = parseInt(lines.shift())   

   let fLines = lines.splice(0, coinsAmount + 1).map(x => parseInt(x))

   
   const jump = fLines.pop()
   let coins = fLines.reverse(),
      sum = 0

   for (let i = 0; i < (Math.ceil(coinsAmount / jump)); i++){
      sum += coins[jump * i]
   }

   let primo, counter = 0

   if(sum === 1 || sum === 0){
      primo = false
   }
   else{
      for(let i = 1; i <= sum; i++){
         if(sum % i === 0)
            counter++
      }

      if(counter === 2)
         primo = true
      else
         primo = false
   }

   primo ? console.log("You’re a coastal aircraft, Robbie, a large silver aircraft.") : console.log("Bad boy! I’ll hit you.")

}
































// let fLines = []

// lines.forEach((item) => {
//    fLines.push(item.split(" ").map(x => parseInt(x)))
// })
// .map(x => parseInt(x))

