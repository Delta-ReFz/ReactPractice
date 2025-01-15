

function List() {

    const fruits = [{id: 1, name:"apple", calories:95},
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name:"banana",calories:105}, 
                    {id: 4, name:"coconut", calories:159}];

    
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
   
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERICAL ORDER

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    
    const listItems = lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id}>{lowCalFruit.name}: {lowCalFruit.calories}</li>)

    const listItems2 = fruits.map(fruit => <li key = {fruit.id}>{fruit.name}: {fruit.calories}</li>)

    return(<ol>{listItems}<p>----------------</p>{listItems2}</ol>);

}

export default List