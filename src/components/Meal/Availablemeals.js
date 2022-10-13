import React from "react";
import Mealitem from "../Layout/Mealitem";
import Card from "../UI/Card";
import style from './Availablremeals.module.css';

const li = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
export default function Availablemeals() {
  const arg = li.map((meals) => <Mealitem id={meals.id}name={meals.name} description={meals.description} price={meals.price}/>);
  return (
    <section className={style.meals}>
      <Card>
      <ul>{arg}</ul>
      </Card>
    </section>
  );
}
