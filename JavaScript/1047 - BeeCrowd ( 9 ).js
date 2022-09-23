const lines = ["12 12 13 12"]

let fLines = []

lines.forEach((item) => {
   fLines.push(item.split(" ").map(x => parseInt(x)))
})
// .map(x => parseInt(x))

const horaInicio = fLines[0][0]
const horaFim = fLines[0][2]
const minutoInicio = fLines[0][1]
const minutoFim = fLines[0][3]
let hora, minuto, allDay = false;


if(minutoInicio < minutoFim){
  if(horaInicio > horaFim){
    hora = 24 + (horaFim - horaInicio) 
    minuto = minutoFim - minutoInicio
  }
  else{
    hora = horaFim - horaInicio 
    minuto = minutoFim - minutoInicio
  }
}
else if (minutoInicio > minutoFim){
  if(horaInicio === horaFim){
    hora = 23 
    minuto = 60 + (minutoFim - minutoInicio)
  }
  else if (horaInicio < horaFim){
    hora = horaFim - horaInicio - 1 
    minuto = 60 + (minutoFim - minutoInicio)
  }
  else{
    hora = 24 + (horaFim - horaInicio - 1 ) 
    minuto = 60 + (minutoFim - minutoInicio)
  }
}
else if (minutoInicio === minutoFim){
  if(horaInicio === horaFim){
    allDay = true
  }
  else if(horaInicio < horaFim){
    hora = horaFim - horaInicio 
    minuto = minutoFim - minutoInicio
  }
  else {
    hora = 24 + (horaFim - horaInicio) 
    minuto = minutoFim - minutoInicio
  }
}


allDay ? console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)") : console.log(`O JOGO DUROU ${ hora } HORA(S) E ${ minuto } MINUTO(S)`)
