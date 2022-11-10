import { Divider, Input } from 'antd';
import React, { useState } from 'react';
import './AddFoodForm.css';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameInput = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };
  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    props.addFoodOnList(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div className="formStyle">
      <Divider>
        <h2>Add Food Entry</h2>
      </Divider>
      <form onSubmit={handleSubmit}>
        <label>Food name</label>
        <Input
          value={name}
          type="text"
          onChange={handleNameInput}
          placeholder="Nome da comida"
        />
        <label>Food Picture URL</label>
        <Input
          value={image}
          type="text"
          onChange={handleImageInput}
          placeholder="URL da imagem da comida"
        />
        <label>Calories p/ Serving</label>
        <Input
          value={calories}
          type="Number"
          onChange={handleCaloriesInput}
          placeholder="Quantidade de calorias por porção"
        />
        <label>Number of servings p/ recipe</label>
        <Input
          value={servings}
          type="Number"
          onChange={handleServingsInput}
          placeholder="Quantidade de porções"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
