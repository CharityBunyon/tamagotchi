import './sleep.scss';
import utilities from '../../helpers/utilities';

let energy = 50;

const nap = () => {
  if (energy <= 100) {
    energy += 50;
    document.getElementById('sleepBar').value = energy;
  }
};

const deep = () => {
  if (energy <= 40) {
    // fun = 100;
    energy += 60;
    document.getElementById('sleepBar').value = energy;
  }
};

const printSleep = () => {
  let domString = '';
  domString += `
  <div>
  <progress id="sleepBar" value="50" min="0" max="100" style="background-color:green""></progress> 
  <h3>Sleep</h3>
  <div>
  <button id="nap">Nap</button>
  <button id="deep">Deep Slumber</button>
  </div>
  </div>
  `;
  utilities.printToDom('sleep', domString);
  document.getElementById('nap').addEventListener('click', nap);
  document.getElementById('deep').addEventListener('click', deep);
};

export default { printSleep };
