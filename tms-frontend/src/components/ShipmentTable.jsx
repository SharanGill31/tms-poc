import { memo } from 'react';

const ShipmentTable = memo(({ shipments, onSelect, role }) => (
  <table className="w-full border-collapse border">
    <thead>
      <tr className="bg-gray-200">
        <th className="p-2">ID</th>
        <th>Shipment #</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Status</th>
        <th>Carrier</th>
        <th>Weight</th>
        <th>Value</th>
        <th>Ship Date</th>
        <th>Delivery Date</th>
        {role === 'admin' && <th>Actions</th>}
      </tr>
    </thead>
    <tbody>
      {shipments.map((s) => (
        <tr key={s.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => onSelect(s)}>
          <td className="p-2">{s.id}</td>
          <td>{s.shipmentNumber}</td>
          <td>{s.origin}</td>
          <td>{s.destination}</td>
          <td>{s.status}</td>
          <td>{s.carrier}</td>
          <td>{s.weight}</td>
          <td>{s.value}</td>
          <td>{s.shipDate}</td>
          <td>{s.deliveryDate}</td>
          {role === 'admin' && <td><button>Edit</button> <button>Delete</button></td>}
        </tr>
      ))}
    </tbody>
  </table>
));

export default ShipmentTable;