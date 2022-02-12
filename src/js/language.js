import { Resume } from './resume';

export class Language extends Resume {
  constructor() {
    super();
    this.transleter = {};
    this.curentLanguage = 'en';
  }
  onLanguageClick = evnt => {
    if (evnt.target === this.refs.enBt) {
      this.setLocalLanguage('en');
      this.transleteInEn();
    } else if (evnt.target === this.refs.uaBt) {
      this.setLocalLanguage('ua');
      this.transleteInUa();
    } else if (evnt.target === this.refs.ruBt) {
      this.setLocalLanguage('ru');
      this.transleteInRu();
    } else {
      return;
    }
  };

  // ====================обращения к дому============================
  onProperty = () => {
    this.refs.name.textContent = this.transleter.name;
    this.refs.projeckts.textContent = this.transleter.projeckts;
    this.refs.educations.textContent = this.transleter.educations;
    this.refs.aboutMe.textContent = this.transleter.aboutMe;
    this.refs.experience.textContent = this.transleter.experience;
    this.refs.myEng.textContent = this.transleter.myEng;
    this.refs.myExperience.textContent = this.transleter.myExperience;
    this.refs.lastWork.textContent = this.transleter.lastWork;
    this.refs.selfEducation.textContent = this.transleter.selfEducation;
    this.refs.hobby.textContent = this.transleter.hobby;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
    // this.refs.name.textContent = this.transleter.name;
  };

  // ======================переводы==============================
  transleteInEn = () => {
    const enWords = {
      name: 'Viktor Yachmenik',
      projeckts: 'Prodjects:',
      educations: 'Educations:',
      aboutMe: 'About me:',
      experience: 'Work experience:',
      myEng: 'English pre-intermediate.',
      myExperience: 'I do not have commercial experience in IT.',
      lastWork:
        'Previously i worked as an electrician for about 10 years. I tired of bodily hard and unrewarding work.',
      selfEducation: 'Self-education IT and english.',
      hobby: 'I am fond of computers. I study android applications. I like to play chess.',
    };
    this.transleter = enWords;
    this.onProperty();
  };
  transleteInUa = () => {
    const uaWords = {
      name: 'Віктор Ячменик',
      projeckts: 'Мої проекти:',
      educations: 'Освіта:',
      aboutMe: 'Про мене:',
      experience: 'Досвід роботи',
      myEng: 'Англійська нижча за середню, розумію документацію.',
      myExperience: 'Я не маю комерційного досвіду роботи в IT сфері.',
      lastWork:
        'Раніше я працював електриком близько десяти років. Я втомився від фізично важкої та невдячної роботи.',
      selfEducation: 'Самоосвіта IT та англійської.',
      hobby: "Я захоплююсь комп'ютерами. Вивчаю андроїд програми. Маю розряд із шахів.",
    };
    this.transleter = uaWords;
    this.onProperty();
  };
  transleteInRu = () => {
    const ruWords = {
      name: 'Виктор Ячменик',
      projeckts: 'Мои проэкты:',
      educations: 'Образование:',
      aboutMe: 'Немного обо мне:',
      experience: 'Опыт работы',
      myEng: 'Английский ниже среднего, понимаю документацию.',
      myExperience: 'У меня нет комерческого опыта работы в IT сфере.',
      lastWork:
        'Раньше я работал электриком около 10 лет. Я устал от физически тяжелой и неблагодарной работы.',
      selfEducation: 'Самообразование IT и английскому.',
      hobby: 'Я увлекаюсь компютерами. Изучаю андроид приложения. Имею разряд по шахматам.',
    };
    this.transleter = ruWords;
    this.onProperty();
  };

  // ===================seve language============================
  setLocalLanguage = argument => {
    localStorage.setItem('languageResume', JSON.stringify(argument));
  };

  getLocalLanguage = () => {
    const selectLanguage = localStorage.getItem('languageResume');
    if (selectLanguage) {
      this.curentLanguage = JSON.parse(selectLanguage);
      if (this.curentLanguage === 'en') {
        return;
      } else if (this.curentLanguage === 'ua') {
        this.transleteInUa();
      } else if (this.curentLanguage === 'ru') {
        this.transleteInRu();
      }
    }
  };
}
