import './style/main.scss';

import { Listener } from './js/listener.js';

const init = new Listener();

(() => {
  init.start();
})();
