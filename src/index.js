// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getParts from './components/LegoCharacter/legoCharacter';

const initlializeApp = () => {
  getParts.initializeHeads();
  getParts.initializeTorsos();
  getParts.initializeLegs();
  getParts.initializeChooseHead();
  getParts.initializeChooseTorso();
  getParts.initializeChooseLegs();
};

initlializeApp();
