const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/resolvers');
const { authMiddleware } = require('./middleware/auth');
const shipments = require('./data/shipments');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // This will now return null instead of crashing if the token is missing
    const user = authMiddleware(req); 
    return { user, shipments };
  },
  cors: {
    // Added localhost to allow testing while you develop
    origin: ['https://tms-poc-psi.vercel.app', 'http://localhost:5173'],
    credentials: true,
  },
  // Ensures you can see the GraphQL interface on Render
  introspection: true, 
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});