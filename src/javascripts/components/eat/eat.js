import './eat.scss';
import utilities from '../../helpers/utilities';

let full = 100;

const salad = () => {
  if (full <= 100) {
    full += 10;
    document.getElementById('bar').value = full;
  }
};

const pizza = () => {
  if (full >= 3) {
    full -= 3;
    document.getElementById('bar').value = full;
  }
};


const printEat = () => {
  let domString = '';
  domString += `
  <progress id="bar" value="100" min="0" max="100"></progress> 
  <h3>Eat</h3>
  <div>
  <button id="bad">Pizza</button>
  <button id="good">Salad</button>
  </div>
  `;
  utilities.printToDom('eat', domString);
  document.getElementById('bad').addEventListener('click', pizza);
  document.getElementById('good').addEventListener('click', salad);
};

export default { printEat };
