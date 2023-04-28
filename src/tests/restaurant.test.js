import createcafeid from './';

describe('createcafeid function', () => {
  beforeEach(() => {
    // Mock the fetch method to return a mock Response object
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ cafeId: '123456' }),
    });
  });

  afterEach(() => {
    // Clear the mock after each test
    global.fetch.mockClear();
  });

  it('sends a POST request to the start URL with the correct headers', async () => {
    await createcafeid();

    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('returns the cafe ID from the response', async () => {
    const result = await createcafeid();

    expect(result).toEqual({ cafeId: '123456' });
  });
});
