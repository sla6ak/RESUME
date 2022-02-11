import './style/main.scss';

import { Listener } from './js/listener';

const init = new Listener();

(() => {
  init.start();
})();
