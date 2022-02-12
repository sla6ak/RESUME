export class Resume {
  constructor() {
    this.refs = {
      body: document.querySelector('.js-body'),
      themaBt: document.querySelector('.js-thema'),
      themaImg: document.querySelector('.skills__img'),
      languageTxt: document.querySelector('.language'),
      linkProject: document.querySelectorAll('.info__prodject--link'),
      mapCity: document.querySelector('.adress-city'),
      backdropMap: document.querySelector('.footer__backdrop'),
      enBt: document.querySelector('.js-en'),
      uaBt: document.querySelector('.js-ua'),
      ruBt: document.querySelector('.js-ru'),
      languageModal: document.querySelector('.language__modal'),
      languageBox: document.querySelector('#lang'),
      name: document.querySelector('.js-name'),
      projeckts: document.querySelector('.info__proj'),
      educations: document.querySelector('.info__educations'),
      experience: document.querySelector('.info__experience'),
      aboutMe: document.querySelector('.info__about-me'),
      myEng: document.querySelector('.js-my-eng'),
      myExperience: document.querySelector('.js-my-experience'),
      lastWork: document.querySelector('.js-last-work'),
      selfEducation: document.querySelector('.js-self-education'),
      hobby: document.querySelector('.js-hobby'),
      hard: document.querySelector('.js-hard'),
      soft: document.querySelector('.js-soft'),
      logica: document.querySelector('.js-logica'),
      honest: document.querySelector('.js-honest'),
      stubborn: document.querySelector('.js-stubborn'),
      designer: document.querySelector('.js-designer'),
      course: document.querySelector('.js-course'),
      courseStack: document.querySelector('.js-course-stack'),
      languageMenu: document.querySelector('.language__menu'),
      actuality: document.querySelector('.actuality'),
      city: document.querySelector('.js-city'),
      cityName: document.querySelector('.adress-city'),
      dataNew: document.querySelector('.data__new'),
      upScroll: document.querySelector('#scrollup'),
    };
  }
  curentDate = () => {
    let date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let monthDate = date.toLocaleString(this.curentLanguage, options);
    this.refs.dataNew.textContent = `${monthDate}`;
  };
}
