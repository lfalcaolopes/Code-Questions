var maximumWealth = function(accounts) {
    const acc = accounts.map(item => item.reduce((partialSum, a) => partialSum + a, 0))

    return Math.max(...acc)
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))