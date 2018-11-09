// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getParts from './components/LegoCharacter/legoCharacter';

const initlializeApp = () => {
  getParts.initializeHeads();
  getParts.initializeTorsos();
  getParts.initializeLegs();
  getParts.headDropDown();
};

initlializeApp();
