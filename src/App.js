import './App.css';
import foods from './foods.json';
import FoodBox from './Content/FoodBox/FoodBox';

function App() {

  return (
    
    <div className="App">
      <FoodBox food={foods}/>
    </div>
  );
}

export default App;
