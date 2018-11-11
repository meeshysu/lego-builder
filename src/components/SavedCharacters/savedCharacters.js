import $ from 'jquery';
import './savedCharacters.scss';

const savedCharacterString = (character) => {
  let newString = '';
  newString += `<div class="newcard">
  <h5 class="legoName">${character.name}</h5>
    <img src="${character.headImage}" alt="head">
    <img src="${character.torsoImage}" alt="torso">
    <img src="${character.legsImage}" alt="legs">
  </div>
  </div>`;
  $('#savedLegoCreation').append(newString);
};

const emptyObjectSlot = {
  name: '',
  headImage: '',
  torsoImage: '',
  legsImage: '',
};

const retrieveData = () => {
  const headName = $('#head').html();
  const torsoName = $('#torso').html();
  const legsName = $('#legs').html();
  const newSavedName = `${headName}${torsoName}${legsName}`;
  const headImage = $('.head').attr('src');
  const torsoImage = $('.torso').attr('src');
  const legsImage = $('.legs').attr('src');
  emptyObjectSlot.name = newSavedName;
  emptyObjectSlot.headImage = headImage;
  emptyObjectSlot.torsoImage = torsoImage;
  emptyObjectSlot.legsImage = legsImage;
};

const bindEvents = () => {
  $('#savedLego').click(() => {
    retrieveData();
    savedCharacterString(emptyObjectSlot);
  });
};

export default { bindEvents };
