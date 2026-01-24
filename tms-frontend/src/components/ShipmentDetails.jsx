const ShipmentDetails = ({ shipment, onClose, role }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded max-w-lg w-full">
      <h2 className="text-xl mb-4">Shipment Details</h2>
      <p>ID: {shipment.id}</p>
      <p>Shipment #: {shipment.shipmentNumber}</p>
      <p>Origin: {shipment.origin}</p>
      <p>Destination: {shipment.destination}</p>
      <p>Status: {shipment.status}</p>
      <p>Carrier: {shipment.carrier}</p>
      <p>Weight: {shipment.weight}</p>
      <p>Value: {shipment.value}</p>
      <p>Ship Date: {shipment.shipDate}</p>
      <p>Delivery Date: {shipment.deliveryDate}</p>
      <p>Notes: {shipment.notes}</p>
      {role === 'admin' && <button className="bg-yellow-500 p-2 mr-2">Edit</button>}
      <button onClick={onClose} className="bg-red-500 text-white p-2">Close</button>
    </div>
  </div>
);

export default ShipmentDetails;