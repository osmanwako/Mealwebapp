import './assets/style.css';
import './assets/title.png'
import './assets/logo.png';
import getcategories from './module/meal.js';
let meals = [];
const loading = async () => {
  const resp = await getcategories().then((data) => {
    meals = [...data];
  });
};
loading();
