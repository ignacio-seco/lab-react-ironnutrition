import { Card, Button, Col, Row, Divider } from 'antd';
import { useState } from 'react';
import React from 'react';
import './FoodBox.css';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
import Search from '../Search/Search';

function FoodBox(props) {
  let [hide, setHide] = useState(0);

  const [foodList, setFoodList] = useState(props.food);

  const [searchMecanism, setSearchMecanism] = useState(foodList);

  const [showForm, setShowForm] = useState('Hidden Form');

  const hiddenForm = () => {
    if (showForm === 'Hidden Form') {
      setShowForm('Show Form');
      setHide('hide');
    } else {
      setShowForm('Hidden Form');
      setHide('');
    }
  };

  const addFoodOnList = (newFood) => {
    const updateFood = [...foodList, newFood];
    setFoodList(updateFood);
    setSearchMecanism(updateFood);
  };

  const deleteFood = (key) => {
    console.log(key);
    const originalKey = foodList.indexOf(searchMecanism[key]);
    console.log(originalKey);
    const newArray = foodList.filter((element, index) => index !== originalKey);
    setFoodList(newArray);
    setSearchMecanism(newArray);
  };

  const searchFood = (search) => {
    const searchedFood = foodList.filter(
      (element) => element.name.toUpperCase().indexOf(search) !== -1
    );
    setSearchMecanism(searchedFood);
  };
  let renderFoodCards;
  if (searchMecanism.length > 0) {
    renderFoodCards = searchMecanism.map((element, index) => {
      return (
        <Col key={`${index}`}>
          <div className="site-card-border-less-wrapper" key={index}>
            <Card
              key={`${index}`}
              title={element.name}
              bordered={false}
              style={{ width: 300 }}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img alt="food" src={element.image} className="cardImage" />
                }
              ></Card>
              <p>
                Calories:{' '}
                <span className="boldStyle">{`${element.calories}`}</span>
              </p>
              <p>
                Servings:{' '}
                <span className="boldStyle">{`${element.servings}`}</span>
              </p>
              <p>
                <span className="boldStyle">{`Total Calories: ${
                  Number(element.servings) * Number(element.calories)
                } `}</span>
                kcal
              </p>
              <Button
                type="primary"
                key={index}
                onClick={(event) => deleteFood(index)}
              >
                Delete
              </Button>
            </Card>
          </div>
        </Col>
      );
    });
  } else {
    renderFoodCards = (
      <Col span={24}>
        <div className="alertMessage">
          <p>There is nothing to see here!</p>
          <span>∅</span>
        </div>
      </Col>
    );
  }
  return (
    <div>
      <div className={hide}>
        <AddFoodForm addFoodOnList={addFoodOnList} />
      </div>
      <Divider>
        <Button type="default" onClick={hiddenForm}>
          {showForm}
        </Button>
      </Divider>
      <Search searchFood={searchFood} />

      <Divider>
        <h1>Food List</h1>
      </Divider>
      <Row>{renderFoodCards}</Row>
    </div>
  );
}

export default FoodBox;
