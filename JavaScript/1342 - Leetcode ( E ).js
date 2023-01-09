var numberOfSteps = function(num) {
    let entry = num
    let counter = 0

    while(entry != 0){
        counter ++

        if (entry % 2 == 0) {
            entry /= 2
        }
        else{
            entry --
        }
    }

    return counter
};

console.log(numberOfSteps())