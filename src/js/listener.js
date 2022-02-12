import { Thema } from './thema';

export class Listener extends Thema {
  constructor() {
    super();
  }
  start = () => {
    this.getLocalThema();
    this.getLocalLanguage();
    this.listenerAll();
  };
  listenerAll = () => {
    this.refs.themaBt.addEventListener('click', this.onThemaClick);
    this.refs.languageTxt.addEventListener('click', this.onLanguageClick);
    this.refs.mapCity.addEventListener('click', this.onModalMapClick);
    this.refs.languageModal.addEventListener('click', this.onLanguageClick);
    this.curentDate();
  };
  // =====================footer map==========================
  onModalMapClick = () => {
    const back = this.refs.backdropMap;
    this.refs.body.classList.add('body__no-scroll');
    back.classList.remove('displey-hidden');
    const onBackClick = evn => {
      if (evn.target !== back) {
        return;
      }
      back.classList.add('displey-hidden');
      this.refs.body.classList.remove('body__no-scroll');
      back.removeEventListener('click', onBackClick);
    };
    back.addEventListener('click', onBackClick);
  };
}
