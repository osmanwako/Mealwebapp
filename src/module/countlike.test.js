import likecounter from './countlike.js';

describe('likecounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="like123">Liked 5</div>
    `;
  });

  test('should update the like count', () => {
    const elementId = 'like123';
    const updatedLikeCount = 7;

    likecounter(elementId, `Liked ${updatedLikeCount}`);

    expect(document.getElementById(elementId).textContent).toBe(`Liked ${updatedLikeCount}`);
  });

  test('should throw an error when the element is not found', () => {
    const elementId = 'invalidId';

    expect(() => {
      likecounter(elementId, 'Liked 6');
    }).toThrow(`Element with id ${elementId} not found.`);
  });
});

