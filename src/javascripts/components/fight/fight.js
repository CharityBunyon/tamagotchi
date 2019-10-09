import './fight.scss';
import utilities from '../../helpers/utilities';


let strength = 100;

const bravery = () => {
  if (strength <= 100) {
    strength += 1;
    document.getElementById('fightBar').value = strength;
  }
};

const violence = () => {
  if (strength >= 100) {
    strength = 100;
    strength -= 10;
  } else if (strength < 100 || strength > 0) {
    strength -= 10;
  }
  document.getElementById('fightBar').value = strength;
};


const printFight = () => {
  let domString = '';
  domString += `
  <progress id="fightBar" value="100" min="0" max="100"></progress> 
  <h3>Fight</h3>
  <div>
  <button id="brave">Run Away</button>
  <button id="violence">Karate Chop</button>
  </div>
  `;
  utilities.printToDom('fight', domString);
  document.getElementById('violence').addEventListener('click', violence);
  document.getElementById('brave').addEventListener('click', bravery);
};

export default { printFight };
