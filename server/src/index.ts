import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
 
  type User {
    id: ID!
    name: String
    email: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    authorId: ID!
  }

  type Query {
    user(name: String): User
    users: [User]
    posts: [Post]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: String!, name: String!): User
    deleteUser(id: String!): User
  }
`;
const prisma = new PrismaClient();
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    user: (parent, args) => {
      return prisma.user.findFirst({
        where: { name: args.name },
        include: { posts: true },
      });
    },
    users: () => prisma.user.findMany({ include: { posts: true } }),
    posts: () => prisma.post.findMany(),
  },
  Mutation: {
    createUser: (_, args) => {
      console.log(args);
      const id = uuidv4();
      return prisma.user.create({
        data: {
          id: id,
          name: args.name,
          email: args.email,
        },
      });
    },
    updateUser: (_, args) => {
      return prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
    },
    deleteUser: (_, args) => {
      return prisma.user.delete({
        where: { id: args.id },
      });
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
