import { gql } from '@apollo/client';

export const GET_SHIPMENTS = gql`
  query GetShipments($page: Int!, $limit: Int!, $sort: String) {
    shipments(page: $page, limit: $limit, sort: $sort) {
      id
      shipmentNumber
      origin
      destination
      status
      carrier
      weight
      value
      shipDate
      deliveryDate
      notes
    }
  }
`;

export const GET_SHIPMENT = gql`
  query GetShipment($id: ID!) {
    shipment(id: $id) {
      id
      shipmentNumber
      origin
      destination
      status
      carrier
      weight
      value
      shipDate
      deliveryDate
      notes
    }
  }
`;