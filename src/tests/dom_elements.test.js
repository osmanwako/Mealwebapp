import ulelement from './dom_elements.js';

test('getElementById returns the correct element', () => {
  document.body.innerHTML = '<ul id="meal-unorder-id"></ul>';
  expect(ulelement).toBeInstanceOf(HTMLUListElement);
});
