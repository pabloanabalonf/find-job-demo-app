const BASE_API = 'https://jobs.github.com/positions.json?page=1&search=';

class Api {
  async getJobs(searchTerm) {
    const query = await fetch(`${BASE_API}${searchTerm}`);
    const data = await query.json();

    return data;
  }
}

export default new Api();