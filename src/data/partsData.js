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

const selectLegoHead = selectValueHead => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/heads')
    .then((data) => {
      const headChosen = data.data;
      const filteredHead = headChosen.filter(x => x.id === selectValueHead);
      resolve(filteredHead);
    })
    .catch((error) => {
      reject(error);
    });
});

const selectLegoTorso = selectValueTorso => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/torsos')
    .then((data) => {
      const torsoChosen = data.data;
      const filteredTorso = torsoChosen.filter(x => x.id === selectValueTorso);
      resolve(filteredTorso);
    })
    .catch((error) => {
      reject(error);
    });
});

const selectLegoLegs = selectValueLegs => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/legs')
    .then((data) => {
      const legsChosen = data.data;
      const filteredLegs = legsChosen.filter(x => x.id === selectValueLegs);
      resolve(filteredLegs);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getAllHeadsFromDb,
  getAllTorsosFromDb,
  getAllLegsFromDb,
  selectLegoHead,
  selectLegoTorso,
  selectLegoLegs,
};
