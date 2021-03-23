const { RESTDataSource } = require("apollo-datasource-rest"); //allows you to query data like axios

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/"; // base url for my queies
  }

  //async function to fetch individual joke
  async getJoke({ id }) {
    //get passed object and use it to query data with it
    const response = await this.get(`random?category=${id}`);

    //return response calling reducer function to sort data in the way the schema is set
    return this.jokeReducer(response);
  }

  // fetching list of categories

  async getListsCategory() {
    //Only pass "category" to base url to get list of categories
    const response = await this.get("categories");

    //map list of array to reducer to handle individual list item returned as the schema is defind
    return response.map((joke) => this.jokesReducer(joke));
  }

  // joke reducer

  jokeReducer(joke) {
    return {
      name: joke.value,
    };
  }

  // category reducer

  jokesReducer(joke) {
    return {
      name: joke,
    };
  }
}

module.exports = JokesAPI;
