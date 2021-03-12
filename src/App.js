

let names = ['Kalle', 'Olle', 'Pelle']




const fruits = [['banana', 30], ['orange', 25], ['apple', 15], ['date', 20], ['pineapple', 30]]
// fruits[0] ->  ['banana', 30]
  // fruits[0][1] -> 30
const animals = [
  {
    id:1,
    type:'dog',
    feet: 4,
    sound: 'bark',
    base: 'land'
}, 
{
    id:2,
    type: 'cat',
    feet: 4,
    sound: 'meow',
    base: 'land'
},
{
    id:3,
    type: 'fish',
    feet: 0,
    sound: 'bubble',
    base: 'sea'
},
{
    id:4,
    type: 'duck',
    feet: 2,
    sound: 'quack',
    base: 'sky'
},{
  id:5,
  type:'dog',
  feet: 4,
  sound: 'bark',
  base: 'land'
}, 
{
  id:6,
  type: 'cat',
  feet: 4,
  sound: 'meow',
  base: 'land'
},
{
  id:7,
  type: 'fish',
  feet: 0,
  sound: 'bubble',
  base: 'sea'
},
{
  id:8,
  type: 'duck',
  feet: 2,
  sound: 'quack',
  base: 'sky'
},
]


function search(nameKey, myArray){
  console.log('search')
  for (var i=0; i < myArray.length; i++) {
    if (myArray[i].sound === nameKey) {
         return myArray[i];
  }
  }
}
//console.log(animals[0].id)

var resultObject = search('bark', animals);
console.log(resultObject)
// consol.log(animals[0])

// animals.findIndex(() => )

// console.log(fruits[0]) // banana
// console.log(animals[0]) // banana
// let filteredAnimal = animals.filter((animal)=> animal.id === 2)
// filteredAnimal.map((animalType,i)=>console.log(animalType)) // banana

  function App () {

    function stores(e) {
      // switch (e.target.value) {
      //   case 'fruits':
       
        
      //   fruits.map(([fruit, cost]) => console.log(`${fruit}  cost ${cost} SEK`))
      //     break;
          
      //   case 'animals':
          
      //   animals.map(({id, type, feet, sound, base})=>{console.log(`
      //   Id:${id} is a ${type}, with ${feet} feet, he's ${sound}s when 
      //   he is hungry and lives on ${base}`)})
      //     break;
      
      //   default:
      //     break;
      // }
    }
    

    // Mango cost 20kr
    
    

  return (
    <>
    <h1>My Store</h1>
    <select onChange={stores}>
      <option value='fruits'>
        Fruits 4 Life
      </option>
      <option value='animals'>
        Animals
      </option>
    </select>

   </> 
 
  )
}
export default App;