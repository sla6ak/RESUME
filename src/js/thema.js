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
    this.refs.linkProject.forEach(el => {
      el.classList.toggle('text--dark');
    });
    //   this.refs.body.classList.toggle( 'body--dark' );
    //   this.refs.body.classList.toggle( 'body--dark' );
    //   this.refs.body.classList.toggle('body--dark');
  };

  setLocalThema = () => {
    localStorage.setItem('thema', JSON.stringify(this.refs.themaBt.hasAttribute('checked')));
  };

  getLocalThema = () => {
    const selectThema = localStorage.getItem('thema');
    if (selectThema) {
      if (selectThema === 'true') {
        this.onThemaClick();
      }
    }
  };
}
