import '../../styles/eat.scss';
import utilities from '../helpers/utilities';

// let full = 100;

const printEat = () => {
  let domString = '';
  domString += `
  <div id="eatProgress"> 
  <h3>Eat</h3>
  <div id="eatBar"></div> 
  <button id="bad">Pizza</button>
  <button id="good">Salad</button>
</div> 
  
  `;
  utilities.printToDom('eat', domString);
};

export default { printEat };
