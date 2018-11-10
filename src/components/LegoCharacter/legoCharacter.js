// import Axios from 'axios';
import $ from 'jquery';
import 'bootstrap';

import legoParts from '../../data/partsData';


const createPartsCard = (part, divId) => {
  let domString = '';
  domString += `<div id="card">
                    <img id="cardImg" src='${part.imageUrl}'/>
                </div>`;
  $(divId).html(domString);
};

const initializeHeads = () => {
  legoParts.getAllHeadsFromDb()
    .then((data) => {
      createPartsCard(data, '#headContainer');
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeTorsos = () => {
  legoParts.getAllTorsosFromDb()
    .then((data) => {
      createPartsCard(data, '#torsoContainer');
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeLegs = () => {
  legoParts.getAllLegsFromDb()
    .then((data) => {
      createPartsCard(data, '#legsContainer');
    })
    .catch((error) => {
      console.error(error);
    });
};


export default {
  initializeHeads, initializeTorsos, initializeLegs,
};

// const initializeChooseHead = () => {
//   legoParts.selectLegoHead()
//     .then((data) => {
//       createPartsCard(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };


// const chooseLegoHead = (legoHead) => {
//   let selectedHead = [];
//   const head = data.show(heads.head.imageUrl)
//   switch (legoHead) {
//     case 'Ast':
//       $(this).attr('heads.heads1.imageUrl');
//       break;
//     default:
//       selectedHead = [];
//   }
//   return selectedHead;
// };
