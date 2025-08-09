const GitClient = require('./GitClient');
const axios = require('axios');

jest.mock('axios');

describe('Git Client Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return repository names for techiesyed', async () => {
    const mockData = [
      { id: 1, name: 'repo-one' },
      { id: 2, name: 'repo-two' }
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const names = await GitClient.getRepositories('techiesyed');

    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/techiesyed/repos'
    );
    expect(names).toEqual(['repo-one', 'repo-two']);
  });
});
