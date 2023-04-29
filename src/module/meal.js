import { meal_url } from './restapi.js';
<<<<<<< HEAD

const getcategories = async () => {
  const url = `${meal_url}/filter.php?c=Seafood`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    throw error;
  }
  return [];
};
=======
 const getcategories = async () => {
   const url = `${meal_url}/filter.php?c=Seafood`;
   try {
     const response = await fetch(url);
     const data = await response.json();
     return data.meals;
   } catch (error) {
     throw error;
   }
   return [];
 };
>>>>>>> fa87408 (Add comment popup interaction)
export default getcategories;
