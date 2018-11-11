// import Axios from 'axios';
import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';

import legoParts from '../../data/partsData';


const createPartsCard = (part, divId, nameDiv) => {
  let domString = '';
  domString += `<div id="card">
                    <img id="cardImg" src='${part.imageUrl}'/>
                </div>`;
  $(divId).html(domString);
  $(nameDiv).html(`${part.name}`);
};


const chosenHead = (selectValueHead) => {
  legoParts.selectLegoHead(selectValueHead)
    .then((data) => {
      console.log(data[0]);
      $('#headContainer').hide();
      createPartsCard(data[0], '#newHeadContainer', '#head');
    })
    .catch((error) => {
      console.error(error);
    });
};

const dropdownHead = () => {
  $('#buttonId').click(() => {
    const selectValueHead = $('#dropdownHeads').val();
    chosenHead(selectValueHead);
  });
};

const initializeHeads = () => {
  legoParts.getAllHeadsFromDb()
    .then((data) => {
      createPartsCard(data, '#headContainer');
      dropdownHead();
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeChooseHead = () => {
  legoParts.selectLegoHead()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const chosenTorso = (selectValueTorso) => {
  legoParts.selectLegoTorso(selectValueTorso)
    .then((data) => {
      console.log(data[0]);
      $('#torsoContainer').hide();
      createPartsCard(data[0], '#newTorsoContainer', '#torso');
    })
    .catch((error) => {
      console.error(error);
    });
};

const dropdownTorso = () => {
  $('#buttonId2').click(() => {
    const selectValueTorso = $('#dropdownTorsos').val();
    chosenTorso(selectValueTorso);
  });
};

const initializeTorsos = () => {
  legoParts.getAllTorsosFromDb()
    .then((data) => {
      createPartsCard(data, '#torsoContainer');
      dropdownTorso();
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeChooseTorso = () => {
  legoParts.selectLegoTorso()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const chosenLegs = (selectValueLegs) => {
  legoParts.selectLegoLegs(selectValueLegs)
    .then((data) => {
      console.log(data[0]);
      $('#legsContainer').hide();
      createPartsCard(data[0], '#newLegsContainer', '#legs');
    })
    .catch((error) => {
      console.error(error);
    });
};

const dropdownLegs = () => {
  $('#buttonId3').click(() => {
    const selectValueLegs = $('#dropdownLegs').val();
    chosenLegs(selectValueLegs);
  });
};

const initializeLegs = () => {
  legoParts.getAllLegsFromDb()
    .then((data) => {
      createPartsCard(data, '#legsContainer');
      dropdownLegs();
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeChooseLegs = () => {
  legoParts.selectLegoLegs()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  initializeHeads,
  initializeTorsos,
  initializeLegs,
  initializeChooseHead,
  initializeChooseTorso,
  initializeChooseLegs,
};
