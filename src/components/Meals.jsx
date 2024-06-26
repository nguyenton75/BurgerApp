import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");
    if (!response.ok) {
      // ...
    }

    const meals = await response.json();
    setLoadedMeals(meals);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}
        <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
