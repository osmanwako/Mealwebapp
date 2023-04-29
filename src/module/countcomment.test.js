import commentcounter from './countcomment.js'

describe('commentcounter', () => {
  it('should update the comment count on the page', () => {
    document.body.innerHTML = '<div id="comment-count">0</div>';
    commentcounter(5);
    expect(document.getElementById('comment-count').textContent).toBe('5');
  });
});
