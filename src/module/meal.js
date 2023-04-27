import { meal_url } from './restapi.js';
const getcategories = async () => {
  const url = `${meal_url}/categories.php`;
  try {
    await fetch(url).then(async (response) => {
      const data = await response.json();
      return data.categories;
    });
  } catch (Error) {
    throw new Error();
  }
};
export default getcategories;
