import { gql } from '@apollo/client';

/* ===================== AUTH ===================== */
export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

/* ===================== SHIPMENTS ===================== */
export const ADD_SHIPMENT = gql`
  mutation AddShipment($input: ShipmentInput!) {
    addShipment(input: $input) {
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

export const UPDATE_SHIPMENT = gql`
  mutation UpdateShipment($id: ID!, $input: ShipmentInput!) {
    updateShipment(id: $id, input: $input) {
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

export const DELETE_SHIPMENT = gql`
  mutation DeleteShipment($id: ID!) {
    deleteShipment(id: $id)
  }
`;
