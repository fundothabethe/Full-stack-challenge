module.exports = {
  Query: {
    jokes: (_, __, { dataSources }) => dataSources.jokesAPI.getListsCategory(),

    joke: (_, { id }, { dataSources }) => dataSources.jokesAPI.getJoke({ id }),
  },
};

//pass id for the indidual joke
