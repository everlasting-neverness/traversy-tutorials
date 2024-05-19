const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString } = require("graphql");
const { projects, clients } = require("../sampleData");

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const ProjectType = new GraphQLObjectType({ 
  name: "Project",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    client: {
      type: ClientType,
      resolve: (parent, args) =>
        clients.find((client) => client.id === parent.clientId),
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) =>
        clients.find((client) => client.id === args.id),
    },
    clients: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ClientType))),
      resolve: () => clients,
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) =>
        projects.find((project) => project.id === args.id),
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
