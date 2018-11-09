import axios from 'axios';

const getAllHeadsFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/heads')
    .then((data) => {
      const cleanData = data.data[0];
      resolve(cleanData);
    })
    .catch((error) => {
      reject(error);
    });
});

const getAllTorsosFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/torsos')
    .then((data) => {
      const cleanData = data.data[0];
      resolve(cleanData);
    })
    .catch((error) => {
      reject(error);
    });
});

const getAllLegsFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/legs')
    .then((data) => {
      const cleanData = data.data[0];
      resolve(cleanData);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getAllHeadsFromDb, getAllTorsosFromDb, getAllLegsFromDb };
