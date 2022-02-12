import { Language } from './language';

export class Thema extends Language {
  constructor() {
    super();
  }
  onThemaClick = () => {
    if (!this.refs.themaBt.hasAttribute('checked')) {
      this.refs.themaBt.setAttribute('checked', 'checked');
    } else {
      this.refs.themaBt.removeAttribute('checked');
    }
    this.setLocalThema();
    this.refs.body.classList.toggle('body--dark');
    this.refs.themaImg.classList.toggle('skills__img--dark');
    //   this.refs.body.classList.toggle( 'body--dark' );
    //   this.refs.body.classList.toggle( 'body--dark' );
    //   this.refs.body.classList.toggle('body--dark');
  };

  setLocalThema = () => {
    localStorage.setItem('themaResume', JSON.stringify(this.refs.themaBt.hasAttribute('checked')));
  };

  getLocalThema = () => {
    const selectThema = localStorage.getItem('themaResume');
    if (selectThema) {
      if (selectThema === 'true') {
        this.onThemaClick();
      }
    }
  };
}
