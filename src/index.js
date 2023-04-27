import './assets/style.css';
import './assets/title.png'
import getcategories from './module/meal.js';
let meals = [];
const loading = async () => {
  await getcategories().then((lists) => {
    console.log(lists);
  });
};
loading();
