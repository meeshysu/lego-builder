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

const selectLegoHead = legoHead => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/heads')
    .then((data) => {
      const headChosen = data.data;
      const filteredHead = headChosen.filter(x => x.id === legoHead);
      resolve(filteredHead);
    })
    .catch((error) => {
      reject(error);
    });
});

$('#dropdownHead a').click(() => {
  const selectValue = $(this).val();
  selectLegoHead(selectValue);
});


export default {
  getAllHeadsFromDb, getAllTorsosFromDb, getAllLegsFromDb, selectLegoHead,
};

// const chooseLegoHead = () => new Promise((resolve, reject) => {
//   axios.get('http://localhost:3004/heads')
//     .then((data) => {
//       if (selectLegoHead) {
//         $('#headContainer').append('<img src=" + selectLegoHead + ">');
//         resolve(data);
//       }
//     })
//     .catch((error) => {
//       reject(error);
//     });
// });
