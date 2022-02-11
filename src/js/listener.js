import { Thema } from './thema';

export class Listener extends Thema {
  constructor() {
    super();
  }
  start = () => {
    this.getLocalThema();
    this.listenerAll();
  };
  listenerAll = () => {
    this.refs.themaBt.addEventListener('click', this.onThemaClick);
    this.refs.languageTxt.addEventListener('click', this.onLanguageClick);
  };
}
