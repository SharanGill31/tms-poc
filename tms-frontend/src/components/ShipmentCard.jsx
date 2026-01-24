import { memo } from 'react';
import { Menu } from '@headlessui/react';

const ShipmentCard = memo(({ shipment, onSelect, role }) => (
  <div className="border p-4 rounded shadow cursor-pointer" onClick={() => onSelect(shipment)}>
    <h3 className="font-bold">Shipment #{shipment.shipmentNumber}</h3>
    <p>From: {shipment.origin}</p>
    <p>To: {shipment.destination}</p>
    <p>Status: {shipment.status}</p>
    {role === 'admin' && (
      <Menu as="div" className="relative inline-block">
        <Menu.Button>⋯</Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 bg-white border rounded shadow">
          <Menu.Item><button>Edit</button></Menu.Item>
          <Menu.Item><button>Flag</button></Menu.Item>
          <Menu.Item><button>Delete</button></Menu.Item>
        </Menu.Items>
      </Menu>
    )}
  </div>
));

export default ShipmentCard;