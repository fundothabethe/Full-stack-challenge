const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const JokesAPI = require("./fetchData");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const path = require("path");

//initialise express
const app = express();

//apollo server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokesAPI: new JokesAPI(),
  }),
});

server.applyMiddleware({ app });

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "./index.html"));
  res.end();
});

//server listens at http://localhost:8080/
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("server online"));
