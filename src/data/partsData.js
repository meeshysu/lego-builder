import axios from 'axios';

const getAllHeadsFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3004/heads')
    .then((data) => {
      const cleanData = data.data[0];
      console.log(cleanData);
      resolve(cleanData);
    })
    .catch((error) => {
      reject(error);
    });
});

export default getAllHeadsFromDb;
