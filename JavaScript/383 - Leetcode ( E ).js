var canConstruct = function(ransomNote, magazine) {
    const letters = ransomNote.split('')

    for(let i = 0; i<letters.length; i++){
      if (magazine.indexOf(letters[i]) === -1){
        return false
      }else{
        magazine = magazine.replace(letters[i], '')
      }
    }

    return true

};

console.log(canConstruct('aa', 'aab'))