import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';

const typeDefs = `
type Query {
    hello(name: String): String!
}
`;

const resolvers = {
  Query: {
    hello: (_: unknown, { name }: any) => `Hello ${name || 'World'}`
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
createConnection().then(() => {
  server.start(() => console.log('Server is running in localhost:4000'));
});
