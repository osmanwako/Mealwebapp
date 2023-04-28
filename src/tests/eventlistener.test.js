import addaction from './eventlistener.js';

describe('addaction', () => {
  it('should add event listeners to comments and likes', () => {
    const mockComment = document.createElement('button');
    mockComment.classList.add('meal-comment');
    mockComment.addEventListener = jest.fn();
    const mockLike = document.createElement('button');
    mockLike.classList.add('meal-like');
    mockLike.addEventListener = jest.fn();
    document.querySelectorAll = jest.fn().mockReturnValue([mockComment, mockLike]);

    addaction();

    expect(mockComment.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    expect(mockLike.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });
});