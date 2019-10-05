import '../styles/main.scss';

import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
import sleep from './components/sleep';

const init = () => {
  fight.yes();
  play.test();
  sleep.man();
  eat.printEat();
};

init();
