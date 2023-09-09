import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Food from './components/FoodCard';
import FoodCard from './components/FoodCard';
const foodItems = [
  {
    title: "Dosa",
    price: 50,
    rating: 4.5,
    description: "A South Indian crepe made from fermented rice and lentil batter, served with chutney and sambar.",
    image: "dosa",
    
  },
  {
    title: "Samosa",
    price: 20,
    rating: 4.0,
    description: "A popular Indian snack consisting of a deep-fried pastry filled with spiced potatoes and peas.",
    image: "samosa",
    
  },
  {
    title: "Pizza",
    price: 359,
    rating: 4.8,
    description: "A classic Italian dish featuring a thin crust topped with tomato sauce, cheese, and various toppings.",
    image: "pizza",
    
  },
  {
    title: "Burger",
    price: 159,
    rating: 4.4,
    description: "A delicious sandwich made with a grilled or fried patty, lettuce, tomato, cheese, and condiments.",
    image: "burger",
    
  },
  {
    title: "Biryani",
    price: 120,
    rating: 4.7,
    description: "A flavorful Indian rice dish cooked with aromatic spices, herbs, and your choice of meat or vegetables.",
    image: "biryani",
    
  },
  {
    title: "Pasta",
    price: 99,
    rating: 4.2,
    description: "An Italian dish featuring cooked pasta tossed in various sauces, such as marinara or Alfredo.",
    image: "pasta",
    
  },
  {
    title: "Sushi",
    price: 199,
    rating: 4.9,
    description: "A Japanese delicacy consisting of vinegared rice, raw fish, and other ingredients, served with soy sauce and wasabi.",
    image: "sushi",
    
  },
  {
    title: "Taco",
    price: 299,
    rating: 4.3,
    description: "A Mexican street food item consisting of a tortilla filled with various ingredients like meat, salsa, and lettuce.",
    image: "taco",
    
  },
  {
    title: "Ice Cream",
    price: 69,
    rating: 4.6,
    description: "A sweet frozen dessert available in various flavors, perfect for satisfying your sweet tooth.",
    image: "ice_cream",
    
  },
  {
    title: "Chicken Wings",
    price: 99,
    rating: 4.4,
    description: "Crispy and flavorful chicken wings served with a choice of dipping sauces.",
    image: "Chickenwings",
    
  }
];

// You can access individual food items like this:
console.log(foodItems[0]); // Accessing the first item (Dosa)


console.log(foodItems);

function App() {
  
  return (
    <>

      <div className="container">
        {
          foodItems.map((item)=>{
           return <FoodCard price={item.price} title={item.title} img={item.image} desc={item.description} ratings={item.rating}  />
          })
        }

        
      </div>

      {/* <div className='App'>
        <h1>This is a demo of UseState Hook</h1>
        <h1>{counter}</h1>
        <button onClick={incrementHandler} className='btn'>Click me</button>
      </div> */}




    </>
  );
}

export default App;