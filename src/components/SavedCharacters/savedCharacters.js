import $ from 'jquery';
import './savedCharacters.scss';

const savedCharacterString = (character) => {
  let newString = '';
  newString += `<div class="newcard">
  <h5 class="legoName">${character.name}</h5>
    <img src="${character.headImg}" alt="head">
    <img src="${character.torsoImg}" alt="torso">
    <img src="${character.legsImg}" alt="legs">
  </div>
  </div>`;
  $('#savedLegoCreation').append(newString);
};

const emptyObjectSlot = {
  name: '',
  headImg: '',
  torsoImg: '',
  legsImg: '',
};

const retrieveData = () => {
  const headName = $('#head').html();
  const torsoName = $('#torso').html();
  const legsName = $('#legs').html();
  const newSavedName = `${headName}${torsoName}${legsName}`;
  const headImg = $('.head').attr('src');
  const torsoImg = $('.torso').attr('src');
  const legsImg = $('.legs').attr('src');
  emptyObjectSlot.name = newSavedName;
  emptyObjectSlot.headImg = headImg;
  emptyObjectSlot.torsoImg = torsoImg;
  emptyObjectSlot.legsImg = legsImg;
};

const bindEvents = () => {
  $('#savedLego').click(() => {
    retrieveData();
    savedCharacterString(emptyObjectSlot);
  });
};

export default { bindEvents };
