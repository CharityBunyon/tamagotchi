import './play.scss';
import utilities from '../../helpers/utilities';

let fun = 50;

const dish = () => {
  if (fun <= 50) {
    fun += 2;
    document.getElementById('playBar').value = fun;
  }
};

const movie = () => {
  if (fun <= 100) {
    // fun = 100;
    fun += 50;
    document.getElementById('playBar').value = fun;
  }
};


const printPlay = () => {
  let domString = '';
  domString += `
  <div>
  <progress id="playBar" value="50" min="0" max="100" style="background-color:green"></progress> 
  <h3>Play</h3>
  <div>
  <button id="dish">Dishes</button>
  <button id="movie">Movies</button>
  </div>
  </div>
  `;
  utilities.printToDom('play', domString);
  document.getElementById('movie').addEventListener('click', movie);
  document.getElementById('dish').addEventListener('click', dish);
};

export default { printPlay };
