var kWeakestRows = function(mat, k) {
    let soldiers = []
    let res = []
    let rowLength
      mat.forEach((row) => {
        rowLength = row.length
        if(row.indexOf(0) === -1){
          soldiers.push(row.length)
        }
        else{
          soldiers.push(row.indexOf(0))
        }
      })
      for(let i = 0; i < k; i++){
        for(let j = 0; j <= rowLength; j++){
          if(soldiers.indexOf(j) !== -1){
            console.log(soldiers)
            res.push(soldiers.indexOf(j))
            soldiers[soldiers.indexOf(j)] = rowLength + 1
            break;
          }
        }
      }
  
      return res
  };
  