const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/resolvers');
const { authMiddleware } = require('./middleware/auth');
const shipments = require('./data/shipments');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = authMiddleware(req);
    return { user, shipments };
  },
});

server.listen({ port: 4000 }).then(({ url }) => console.log(`Server ready at ${url}`));