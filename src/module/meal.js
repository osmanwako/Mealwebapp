import { meal_url } from './restapi.js';
 const getcategories = async () => {
   const url = `${meal_url}/filter.php?c=Seafood`;
   try {
     const response = await fetch(url);
     const data = await response.json();
     return data.meals;
   } catch (error) {
     throw new Error('Something is wrong here line 10');
   }
   return [];
 };
export default getcategories;
