// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getParts from './components/LegoCharacter/legoCharacter';
import saveParts from './components/SavedCharacters/savedCharacters';

const initlializeApp = () => {
  getParts.initializeHeads();
  getParts.initializeTorsos();
  getParts.initializeLegs();
  getParts.initializeChooseHead();
  getParts.initializeChooseTorso();
  getParts.initializeChooseLegs();
  saveParts.bindEvents();
};

initlializeApp();
