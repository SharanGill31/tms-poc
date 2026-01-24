const { gql } = require('apollo-server');

const typeDefs = gql`
  type Shipment {
    id: ID!
    shipmentNumber: String!
    origin: String!
    destination: String!
    status: String!
    carrier: String
    weight: Float
    value: Float
    shipDate: String
    deliveryDate: String
    notes: String
  }

  input ShipmentInput {
    shipmentNumber: String!
    origin: String!
    destination: String!
    status: String!
    carrier: String
    weight: Float
    value: Float
    shipDate: String
    deliveryDate: String
    notes: String
  }

  type Query {
    shipments(page: Int!, limit: Int!, sort: String): [Shipment]
    shipment(id: ID!): Shipment
  }

  type Mutation {
    login(username: String!, password: String!): String # Add this line (returns token)
    addShipment(input: ShipmentInput!): Shipment
    updateShipment(id: ID!, input: ShipmentInput!): Shipment
    deleteShipment(id: ID!): Boolean
  }
`;

module.exports = typeDefs;