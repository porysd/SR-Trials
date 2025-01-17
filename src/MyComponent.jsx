
import React, {useState} from 'react';

function MyComponent (){


    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0);

    const [student, isStudent] = useState(false);
    
    const updateName = () => {
        setName("Potato");
    }

    const addAge = () => {
        setAge(age + 1);
    }

    const minusAge = () => {
        setAge(age - 1);
    }

    const enrolled = () => {
        isStudent(!student);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button><br/>

            <p>Age: {age}</p>
            <button onClick={minusAge}>-</button>
            <button onClick={addAge}>+</button><br/>

            <p>Student: {student ? "Yes" : "No"}</p>
            <button onClick={enrolled}>Toggle Status</button>
        </div>
    );

}

export default MyComponent