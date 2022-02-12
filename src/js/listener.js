import { Thema } from './thema';
import { debounce } from 'debounce';

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
    this.scrollWindow();
    this.curentDate();
  };
  // =====================footer map==========================
  onModalMapClick = () => {
    const back = this.refs.backdropMap;
    this.refs.body.classList.add('body__no-scroll');
    back.classList.remove('displey-hidden');
    this.refs.upScroll.classList.add('up-hidden');
    const onBackClick = evn => {
      if (evn.target !== back) {
        return;
      }
      back.classList.add('displey-hidden');
      this.refs.body.classList.remove('body__no-scroll');
      this.refs.upScroll.classList.remove('up-hidden');
      back.removeEventListener('click', onBackClick);
    };
    back.addEventListener('click', onBackClick);
  };

  // ==================scroll=====================

  scrollWindow = () => {
    this.refs.upScroll.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    window.addEventListener(
      'scroll',
      debounce(() => {
        scrollY > 200
          ? this.refs.upScroll.classList.remove('up-hidden')
          : this.refs.upScroll.classList.add('up-hidden');
      }, 250),
    );
  };
}
