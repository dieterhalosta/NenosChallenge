const { db1234: data } = require('./../../db');

const getDataset = () => {
  try {
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getDataset };
