import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
 
  type User {
    id: ID!
    name: String
    email: String
    egPosts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: ID!
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    user(id: ID): User
    users: [User]
    posts: [Post]
    book(title: String): Book
    books: [Book]
  }
`;
const posts = [
  {
    id: "1",
    title: "test1",
    body: "body1",
    userId: "1",
  },
  {
    id: "2",
    title: "test1-2",
    body: "body1-2",
    userId: "1",
  },
  {
    id: "3",
    title: "test2",
    body: "body2",
    userId: "2",
  },
];
const users = [
  {
    id: "1",
    name: "pasona1",
    email: "pasona1@fab.pasona.tech",
    egPosts: [posts[0], posts[1]],
  },
  {
    id: "2",
    name: "pasona2",
    email: "pasona2@fab.pasona.tech",
    egPosts: [posts[2]],
  },
  {
    id: "3",
    name: "pasona3",
    email: "pasona3@fab.pasona.tech",
    egPosts: [],
  },
];

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    user: (parent, args) => users.find((item) => item.id === args.id),
    users: () => users,
    book: (parent, args) => books.find((item) => item.title === args.title),
    books: () => books,
    posts: () => posts,
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
