import { writable } from 'svelte/store';

export const food = writable([]);

const fetchMeals = async (count) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  
    for (let i = 0; i < count; i++) {
      const res = await fetch(url);
      const data = await res.json();
  
      if (data && data.meals) {
        const meal = {
          mealName: data.meals[0].strMeal,
          id: data.meals[0].idMeal,
          mealImg: data.meals[0].strMealThumb,
          tags: data.meals[0].strTags || '',
          area: data.meals[0].strArea,
        };
  
        food.update((meals) => {
          const filteredMeals = meals.filter((m) => m.id !== meal.id);
          return [...filteredMeals, meal];
        });
      }
    }
  };
  
  fetchMeals(24);