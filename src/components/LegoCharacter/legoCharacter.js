import $ from 'jquery';
import 'bootstrap';

import getAllHeadsFromDb from '../../data/partsData';

const createPartsCard = (part, divId) => {
  let domString = '';
  domString += `<div>
                    <img src='${part.imageUrl}'/>
                </div>`;
  $(divId).html(domString);
};

const initializeHeads = () => {
  getAllHeadsFromDb()
    .then((data) => {
      console.log(data);
      createPartsCard(data, '#headContainer');
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { initializeHeads };
