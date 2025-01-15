

function List(props) {

    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 100}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "grapes", calories: 45}];

    //fruits.sort((a, b) =>a.name.localeCompare(b.name)); sort aplhabetically

    //fruits.sort((a, b) =>b.name.localeCompare(a.name)); reverse alphabetical order

    //fruits.sort((a, b) => a.calories - b.calories); numerical order

    //fruits.sort((a,b) => b.calories - a.calories); // reverse numerical order

    const listItems = fruits.map(fruit => 
        <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>
        );

    const lowCalFruits = fruits.filter(fruit =>  //filtering fruits with calories less than 100 and add it to another 
        fruit.calories < 100
    );
 
    const listItems1 = lowCalFruits.map(lowCalFruit => 
        <li key={lowCalFruit.id}> {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>
    );

    const highCalFruits = fruits.filter(fruit =>  //filtering fruits with calories greater than or equal to 100 and add it to another 
        fruit.calories >= 100
    );

    const listItems2 = highCalFruits.map(highCalFruit => 
        <li key={highCalFruit.id}> {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>
    );



    const itemList = props.items;

    const listItem3 = itemList.map(item => 
        <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>
    );


    return (
        <>
            <h2>First List</h2>
            <ol>{listItems}</ol>
            <h2> Low Calorie Fruits</h2>
            <ol>{listItems1}</ol>
            <h2> High Calorie Fruits</h2>
            <ol>{listItems2}</ol>
            <h2> Props Item</h2>
            <ol>{listItems3}</ol>

        </>
    );

}

export default List