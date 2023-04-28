import { body, cpopup } from './dom_elements.js';

export const togglepopup = () => {
  cpopup.classList.toggle('d-none');
  body.classList.toggle('d-popup');
};
