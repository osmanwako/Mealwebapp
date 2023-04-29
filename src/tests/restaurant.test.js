import createcafeid from './createcafeid';

describe('createcafeid', () => {
  it('should create a new cafe ID', async () => {
    const mockResponse = { id: '1234567890' };
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });
    global.fetch = mockFetch;

    await createcafeid();

    expect(mockFetch).toHaveBeenCalledWith(start_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should throw an error if there is an issue with the API call', async () => {
    const mockFetch = jest.fn().mockRejectedValue(new Error('Network error'));
    global.fetch = mockFetch;

    await expect(createcafeid()).rejects.toThrow();
  });
});
