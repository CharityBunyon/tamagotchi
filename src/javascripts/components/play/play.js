import './play.scss';
import utilities from '../../helpers/utilities';


let fun = 50;

const netflix = () => {
  if (fun > 50) {
    fun = 50;
    fun += 50;
  } else if (fun < 50) {
    fun = 50;
  }
  document.getElementById('playBar').value = fun;
};

const crochet = () => {
  if (fun <= 100) {
    fun += 2;
    document.getElementById('playBar').value = fun;
  }
};


const printPlay = () => {
  let domString = '';
  domString += `
  <progress id="play" value="100" min="0" max="100"></progress> 
  <h3>Play</h3>
  <div>
  <button id="chill">Netflix & Chill</button>
  <button id="crochet">Crochet</button>
  </div>
  `;
  utilities.printToDom('play', domString);
  document.getElementById('crochet').addEventListener('click', crochet);
  document.getElementById('chill').addEventListener('click', netflix);
};

export default { printPlay };
