const dogs = [
    {name: "Fido", age: 5, owner: "Sam", adopted: true},
    {name: "Stella", age: 2, owner: "", adopted: false},
    {name: "Spot", age: 6, owner: "Diane", adopted: true},
    {name: "Clifford", age: 1, owner: "", adopted: false},
    {name: "Bruiser", age: 8, owner: "Sam", adopted: true},
    {name: "Frodo", age: 3, owner: "", adopted: false},
  ]
//   console.log(dogs)
//   const result = dogs.map(
//     (item,index) => {
//         item.id = index
//         return item
//     }
//   )
  
//   console.log(result)
const result = dogs.filter((item, index) => {
    return item.age < 5
})
console.log(result)