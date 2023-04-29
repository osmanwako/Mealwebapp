import { mealurl } from './restapi.js';

const getcategories = async () => {
  const url = `${mealurl}/filter.php?c=Seafood`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    throw error();
  }
};

export default getcategories;
