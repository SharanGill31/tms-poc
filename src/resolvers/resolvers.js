const _ = require('lodash');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    shipments: (parent, { page, limit, sort }, { user, shipments }) => {
      // 🔍 DEBUG LOGGING (TEMP)
      console.log('[DEBUG] shipments resolver called');
      console.log('[DEBUG] user:', user);
      console.log('[DEBUG] page/limit/sort:', page, limit, sort);
      console.log(
        '[DEBUG] shipments type:',
        typeof shipments,
        Array.isArray(shipments) ? shipments.length : 'not array'
      );

      if (!user) {
        throw new Error('Authentication required');
      }

      if (!shipments || !Array.isArray(shipments)) {
        console.error('[ERROR] shipments data is invalid or missing');
        throw new Error('Internal server error: No shipments data available');
      }

      let data = [...shipments];

      try {
        if (sort) {
          data = _.orderBy(data, [sort], ['asc']);
        }
      } catch (err) {
        console.error('[ERROR] lodash orderBy failed:', err.message);
        throw new Error('Sorting failed');
      }

      const start = (page - 1) * limit;
      const paginated = data.slice(start, start + limit);

      console.log('[DEBUG] returning', paginated.length, 'items');

      return paginated;
    },

    shipment: (parent, { id }, { user, shipments }) => {
      if (!user) throw new Error('Authentication required');
      return shipments.find(s => s.id === id);
    },
  },

  Mutation: {
    login: (parent, { username, password }) => {
      let role = null;
      if (username === 'admin' && password === 'admin') role = 'admin';
      else if (username === 'employee' && password === 'employee') role = 'employee';
      if (!role) throw new Error('Invalid credentials');
      return jwt.sign({ role }, 'secret', { expiresIn: '1h' });
    },

    addShipment: (parent, { input }, { user, shipments }) => {
      if (user.role !== 'admin') throw new Error('Admin only');
      const newShipment = { id: Date.now().toString(), ...input };
      shipments.push(newShipment);
      return newShipment;
    },

    updateShipment: (parent, { id, input }, { user, shipments }) => {
      if (user.role !== 'admin') throw new Error('Admin only');
      const index = shipments.findIndex(s => s.id === id);
      if (index === -1) throw new Error('Shipment not found');
      shipments[index] = { ...shipments[index], ...input };
      return shipments[index];
    },

    deleteShipment: (parent, { id }, { user, shipments }) => {
      if (user.role !== 'admin') throw new Error('Admin only');
      const index = shipments.findIndex(s => s.id === id);
      if (index === -1) throw new Error('Shipment not found');
      shipments.splice(index, 1);
      return true;
    },
  },
};

module.exports = resolvers;
