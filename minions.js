const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]
  const here = minions.forEach(name => {
    console.log(name + ' here')
  });
 
  
const otherArray = []

   const capitalizedMinions = minions.map((minion) => {
    if (minion == 'kevin'){
        return minion
    } else {
        return minion.charAt(0).toUpperCase() + minion.slice(1);
    }
});
console.log(capitalizedMinions)


// const actuallyCapitalizedMinions = capitalizedMinions.filter((minion) => {
//     if (minion.charAt(0) === minion.charAt(0).toUpperCase ) {
//         return true
//     }
// })

const actuallyCapitalizedMinions = capitalizedMinions.filter((minion) => {
    return minion.charAt(0)=== minion.charAt(0).toUpperCase();
}
)
const allNamesCap = actuallyCapitalizedMinions.every((minion) => {
    return minion.charAt(0)=== minion.charAt(0).toUpperCase();
})


console.log(allNamesCap)


const uncapitalizedMinion = capitalizedMinions.find((minion) => {
    return minion.charAt(0)!= minion.charAt(0).toUpperCase();
})
console.log(uncapitalizedMinion)

const index = capitalizedMinions.findIndex((minion) => {
    return minion.charAt(0)!= minion.charAt(0).toUpperCase();
})
console.log(index)

capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toUpperCase() + capitalizedMinions[1].slice(1)
console.log(capitalizedMinions)

const allNamesCap2 = capitalizedMinions.every((minion) => {
    return minion.charAt(0)=== minion.charAt(0).toUpperCase();
})
console.log(allNamesCap2)

const minionNameLengths = capitalizedMinions.map((minion) => {
    return minion.length
})
console.log(minionNameLengths)

const sum = minionNameLengths.reduce((acc, minion) =>{
    return acc + minion
} , 0)
console.log(sum)

const nameSix = capitalizedMinions.some((minion) =>{
    return minion.length >=6
})
const nameSeven = capitalizedMinions.some((minion) => {
    return minion.length >=7
})
console.log(nameSix)
console.log(nameSeven)


const comparedMinions = capitalizedMinions.sort((currentMinion, nextMinion) =>{
    currentValue = currentMinion.length;
    nextValue = nextMinion.length;
    return currentValue - nextValue
})
console.log(comparedMinions)
