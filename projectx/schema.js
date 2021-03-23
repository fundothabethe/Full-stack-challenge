const { gql } = require("apollo-server-express");

// graphql schema
const typeDefs = gql`
  # Entry point
  type Query {
    jokes: [jokes]!
    joke(id: String): joke
  }

  type joke {
    name: String
  }

  type jokes {
    name: String!
  }
`;

module.exports = typeDefs;
