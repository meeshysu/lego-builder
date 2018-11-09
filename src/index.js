// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getHeads from './components/LegoCharacter/legoCharacter';

const initlializeApp = () => {
  getHeads.initializeHeads();
  getHeads.initializeTorsos();
  getHeads.initializeLegs();
};

initlializeApp();
