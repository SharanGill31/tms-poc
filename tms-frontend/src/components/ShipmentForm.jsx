import { useState } from 'react';

const ShipmentForm = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    shipmentNumber: '',
    origin: '',
    destination: '',
    status: 'In Transit',
    carrier: '',
    weight: '',
    value: '',
    shipDate: '',
    deliveryDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      weight: Number(form.weight),
      value: Number(form.value),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-lg">
        <h2 className="text-xl mb-4">Add Shipment</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="shipmentNumber" placeholder="Shipment #" className="w-full border p-2" onChange={handleChange} />
          <input name="origin" placeholder="Origin" className="w-full border p-2" onChange={handleChange} />
          <input name="destination" placeholder="Destination" className="w-full border p-2" onChange={handleChange} />
          <input name="carrier" placeholder="Carrier" className="w-full border p-2" onChange={handleChange} />
          <input name="weight" type="number" placeholder="Weight" className="w-full border p-2" onChange={handleChange} />
          <input name="value" type="number" placeholder="Value" className="w-full border p-2" onChange={handleChange} />
          <input name="shipDate" type="date" className="w-full border p-2" onChange={handleChange} />
          <input name="deliveryDate" type="date" className="w-full border p-2" onChange={handleChange} />
          <textarea name="notes" placeholder="Notes" className="w-full border p-2" onChange={handleChange} />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="border px-4 py-2">
              Cancel
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipmentForm;
