import { useState } from 'react';

function FoodList(props) {
  const [foodList, setFoodList] = useState(props.list);


  return foodList.map((element, index) => {
    return (
    <div key={index}>
      <p> {element.name} </p>
      <img src={element.image} alt={element.name} className="foodPic" />
    </div>);
  });
}
export default FoodList;
