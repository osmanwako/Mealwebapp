function likecounter(id, num) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with id ${id} not found.`);
    }
    element.textContent = num;
  }
  
  module.exports = likecounter;
  