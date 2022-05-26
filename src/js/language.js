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
      this.curentDate();
    } else if (evnt.target === this.refs.uaBt) {
      this.setLocalLanguage('uk');
      this.transleteInUa();
      this.curentDate();
    } else if (evnt.target === this.refs.ruBt) {
      this.setLocalLanguage('ru');
      this.transleteInRu();
      this.curentDate();
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
    this.refs.hard.textContent = this.transleter.hard;
    this.refs.soft.textContent = this.transleter.soft;
    this.refs.langSkill.textContent = this.transleter.langSkill;
    this.refs.logica.textContent = this.transleter.logica;
    this.refs.honest.textContent = this.transleter.honest;
    this.refs.stubborn.textContent = this.transleter.stubborn;
    this.refs.designer.textContent = this.transleter.designer;
    this.refs.course.textContent = this.transleter.course;
    this.refs.courseStack.textContent = this.transleter.courseStack;
    this.refs.languageMenu.textContent = this.transleter.languageMenu;
    this.refs.actuality.textContent = this.transleter.actuality;
    this.refs.city.textContent = this.transleter.city;
    this.refs.cityName.textContent = this.transleter.cityName;
    this.refs.enBt.textContent = this.transleter.enBt;
    this.refs.uaBt.textContent = this.transleter.uaBt;
    this.refs.ruBt.textContent = this.transleter.ruBt;
  };

  // ======================переводы==============================
  transleteInEn = () => {
    const enWords = {
      name: 'Viktor Yachmenik',
      projeckts: 'Projects:',
      educations: 'Educations:',
      aboutMe: 'About me:',
      experience: 'Work experience:',
      myEng: 'Spoken English is below average, but I read and understand the documentation.',
      myExperience: 'I switched to IT from another specialization.',
      lastWork:
        'Part of my life I worked as an electrician for about ten years. Having a strong logic, I decided to devote myself to more intellectual and interesting work.',
      selfEducation: 'Self-education IT and english.',
      hobby: 'I am fond of computers. I study android applications. I like to play chess.',
      hard: 'Hard skills',
      soft: 'Soft skills',
      langSkill: 'Languages',
      logica: 'Good logic',
      honest: 'Honest',
      stubborn: 'Stubborn',
      designer: 'Not conflict',
      course: 'Full course in company',
      courseStack: 'at one year: full-stack developer.',
      languageMenu: 'Language',
      actuality: 'Resume up to date:',
      city: 'city:',
      cityName: 'Krivoy Rog',
      enBt: 'English',
      uaBt: 'Ukraine',
      ruBt: 'Russian',
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
      experience: 'Досвід роботи:',
      myEng: 'Розмовна англійська нижче середньої, але читаю та розумію документацію.',
      myExperience: 'Я перейшов до IT з іншої спеціалізації.',
      lastWork:
        'Частину свого життя я працював електромонтером близько десяти років. Маючи сильну логіку вирішив присвятити себе більш інтелектуальній та цікавій роботі.',
      selfEducation: 'Самоосвіта IT та англійської.',
      hobby: "Я захоплююсь комп'ютерами. Вивчаю андроїд програми. Маю розряд із шахів.",
      hard: 'Технічні навички',
      soft: 'Загальні навички',
      langSkill: 'Мови',
      logica: 'Сильна логіка',
      honest: 'Чесний',
      stubborn: 'Завзятий',
      designer: 'Не конфліктний',
      course: 'Повний курс навчання: близько року у компанії',
      courseStack: 'на позицію фронтенд-бекенд розробника.',
      languageMenu: 'Мова',
      actuality: 'Резюме актуально на:',
      city: 'місто:',
      cityName: 'Кривий Ріг',
      enBt: 'Англійська',
      uaBt: 'Українська',
      ruBt: 'Російська',
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
      experience: 'Опыт работы:',
      myEng: 'Разговорный английский ниже среднего, но читаю и понимаю документацию.',
      myExperience: 'Я перешел в IT с другой специализации.',
      lastWork:
        'Часть своей жизни я работал электромонтером около 10 лет. Имея сильную логику решил посвятить себя более интелектуальной и интересной работе.',
      selfEducation: 'Самообразование IT и английскому.',
      hobby: 'Я увлекаюсь компютерами. Изучаю андроид приложения. Имею разряд по шахматам.',
      hard: 'Технические навыки',
      soft: 'Общие навыки',
      langSkill: 'Языки',
      logica: 'Сильная логика',
      honest: 'Честный',
      stubborn: 'Упорный',
      designer: 'Не конфликтный',
      course: 'Полный курс обучения: около года в компании',
      courseStack: 'на позицию фронтенд-бэкенд розработчика.',
      languageMenu: 'Язык',
      actuality: 'Резюме актуально на:',
      city: 'город:',
      cityName: 'Кривой Рог',
      enBt: 'Английский',
      uaBt: 'Украинский',
      ruBt: 'Русский',
    };
    this.transleter = ruWords;
    this.onProperty();
  };

  // ===================seve language============================
  setLocalLanguage = argument => {
    this.curentLanguage = argument;
    localStorage.setItem('languageResume', JSON.stringify(argument));
  };

  getLocalLanguage = () => {
    const selectLanguage = localStorage.getItem('languageResume');
    if (selectLanguage) {
      this.curentLanguage = JSON.parse(selectLanguage);
      if (this.curentLanguage === 'en') {
        return;
      } else if (this.curentLanguage === 'uk') {
        this.transleteInUa();
      } else if (this.curentLanguage === 'ru') {
        this.transleteInRu();
      }
    }
  };
}
