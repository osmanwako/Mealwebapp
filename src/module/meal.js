import { meal_url } from './restapi.js';
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
export default getcategories;
