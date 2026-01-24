import { useState, useContext, lazy, Suspense } from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_SHIPMENTS } from '../graphql/queries';
import { AuthContext } from '../context/AuthContext';
const ShipmentTable = lazy(() => import('./ShipmentTable')); // Lazy load for perf
const ShipmentCard = lazy(() => import('./ShipmentCard'));
const Pagination = lazy(() => import('./Pagination'));
const ShipmentDetails = lazy(() => import('./ShipmentDetails'));

const Dashboard = () => {
  const [view, setView] = useState('grid'); // grid or tile
  const [page, setPage] = useState(1);
  const limit = 10;
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery(GET_SHIPMENTS, { variables: { page, limit, sort: 'shipmentNumber' } });
  const [selectedShipment, setSelectedShipment] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const shipments = data.shipments;

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl">Shipments Dashboard</h1>
        <button onClick={() => setView(view === 'grid' ? 'tile' : 'grid')} className="bg-gray-200 p-2 rounded">
          Switch to {view === 'grid' ? 'Tile' : 'Grid'} View
        </button>
        {user.role === 'admin' && <button className="bg-green-500 text-white p-2 rounded ml-2">Add Shipment</button>} // Add logic later
      </div>
      <Suspense fallback={<p>Loading view...</p>}>
        {view === 'grid' ? (
          <ShipmentTable shipments={shipments} onSelect={setSelectedShipment} role={user.role} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shipments.map((shipment) => (
              <ShipmentCard key={shipment.id} shipment={shipment} onSelect={setSelectedShipment} role={user.role} />
            ))}
          </div>
        )}
      </Suspense>
      <Pagination currentPage={page} onPageChange={setPage} totalItems={100} limit={limit} /> // Mock total 100
      {selectedShipment && <ShipmentDetails shipment={selectedShipment} onClose={() => setSelectedShipment(null)} role={user.role} />}
    </div>
  );
};

export default Dashboard;