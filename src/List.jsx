

function List() {

    const fruits = [{id: 1, name:"apple", calories:95},
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name:"banana",calories:105}, 
                    {id: 4, name:"coconut", calories:159}];

    
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
   
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERICAL ORDER

    

    const listItems = fruits.map(fruit => <li key = {fruit.id}>{fruit.name}: {fruit.calories}</li>)

    return(<ol>{listItems}</ol>);

}

export default List