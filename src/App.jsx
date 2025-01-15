
import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 100}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "grapes", calories: 45}];
    return (
      <>
        <List items={fruits} category="Fruits"/>
      </>

    );
}

export default App
