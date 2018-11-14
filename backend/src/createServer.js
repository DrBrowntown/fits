const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = requrie("./db");

// Create the GraphQL Yoga Server

function createServer() {
    return new GraphQLServer({
        typeDefs: 
    });
}

module.exports = createServer;