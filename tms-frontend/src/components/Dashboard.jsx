import { useState, useContext, lazy, Suspense } from 'react';
import { useQuery, useMutation } from '@apollo/client/react';
import { GET_SHIPMENTS } from '../graphql/queries';
import { ADD_SHIPMENT } from '../graphql/mutations';
import { AuthContext } from '../context/AuthContext';
import ShipmentForm from './ShipmentForm';

const ShipmentTable = lazy(() => import('./ShipmentTable'));
const ShipmentCard = lazy(() => import('./ShipmentCard'));
const Pagination = lazy(() => import('./Pagination'));
const ShipmentDetails = lazy(() => import('./ShipmentDetails'));

const Dashboard = () => {
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(1);
  const limit = 10;
  const { user } = useContext(AuthContext);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_SHIPMENTS, {
    variables: { page, limit, sort: 'shipmentNumber' },
  });

  const [addShipment] = useMutation(ADD_SHIPMENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const shipments = data.shipments;

  const handleAddShipment = async (input) => {
    await addShipment({ variables: { input } });
    setShowAddModal(false);
    refetch();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Shipments Dashboard</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setView(view === 'grid' ? 'tile' : 'grid')}
            className="bg-gray-200 p-2 rounded"
          >
            Switch to {view === 'grid' ? 'Tile' : 'Grid'} View
          </button>

          {user.role === 'admin' && (
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-green-500 text-white p-2 rounded"
            >
              Add Shipment
            </button>
          )}
        </div>
      </div>

      <Suspense fallback={<p>Loading view...</p>}>
        {view === 'grid' ? (
          <ShipmentTable shipments={shipments} onSelect={setSelectedShipment} role={user.role} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shipments.map((shipment) => (
              <ShipmentCard
                key={shipment.id}
                shipment={shipment}
                onSelect={setSelectedShipment}
                role={user.role}
              />
            ))}
          </div>
        )}
      </Suspense>

      <Pagination currentPage={page} onPageChange={setPage} totalItems={100} limit={limit} />

      {selectedShipment && (
        <ShipmentDetails
          shipment={selectedShipment}
          onClose={() => setSelectedShipment(null)}
          role={user.role}
        />
      )}

      {showAddModal && (
        <ShipmentForm
          onClose={() => setShowAddModal(false)}
          onSave={handleAddShipment}
        />
      )}
    </div>
  );
};

export default Dashboard;
