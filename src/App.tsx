import { useEffect, type CSSProperties } from 'react';
import arrowImage from './assets/images/optimized/tutor-arrow.webp';
import betweenSectionImage from './assets/images/optimized/betwenSection.webp';
import booksImage from './assets/images/optimized/tutor-books.webp';
import heartImage from './assets/images/optimized/tutor-heart.webp';
import phoneImage from './assets/images/optimized/tutor-phone.webp';
import planeImage from './assets/images/optimized/tutor-plane.webp';
import sectionPlaneImage from './assets/images/optimized/section-plane.webp';
import starImage from './assets/images/optimized/tutor-star.webp';
import tutorFaceImage from './assets/images/optimized/tutor-face.webp';

const studentCases = [
  {
    mark: '01',
    title: 'Почерк и задачи стали понятнее',
    text: 'За 6 недель ребенок перестал бояться письменных работ и начал спокойнее разбирать условия задач.',
  },
  {
    mark: '02',
    title: 'Диктанты и примеры без паники',
    text: 'Разобрали слабые места: орфограммы, вычисления в столбик и проверку ответа. Ошибок стало заметно меньше.',
  },
  {
    mark: '03',
    title: 'Появилась уверенность',
    text: 'Ученик начал отвечать на уроках и перестал говорить: “у меня все равно не получится”.',
  },
];

const supportAreas = [
  'пробелы в правилах русского языка',
  'диктанты, списывания и проверочные работы',
  'задачи, примеры и таблица умножения',
  'сложение, вычитание, умножение и деление',
  'текстовые задачи: как понять условие и выбрать действие',
  'геометрия: периметр, площадь и аккуратные чертежи',
  'почерк, аккуратность и оформление в тетради',
  'домашние задания без ежедневных споров',
  'подготовка к контрольным и ВПР',
];

const reviews = [
  'Ирина Витальевна быстро нашла подход к сыну. Домашние задания теперь делаем спокойнее, без слез.',
  'После месяца занятий учительница отметила, что дочка стала внимательнее писать диктанты и решать задачи.',
  'Нам понравилось, что есть понятная система: повторение, практика, мини-итог и рекомендации родителям.',
];

const lessonExamples = [
  'Русский язык: правило через короткую историю и карточки-подсказки',
  'Математика: задача по шагам, схема, вычисления и проверка ответа',
  'Мини-диктант или тренировка примеров с мягким разбором ошибок',
  'План домашней тренировки на 10 минут в день',
];

const educationExperienceStartYear = 2021;
const educationExperienceYears = new Date().getFullYear() - educationExperienceStartYear;
const cabinetExampleLink = 'Пример личного кабинета ученика';
const phone = '89803781258';
const phoneHref = `tel:${phone}`;
const offerDocumentHref = 'https://docs.google.com/document/d/PASTE_DOCUMENT_ID_HERE/edit';

const revealStyle = (delay: number) => ({ '--reveal-delay': `${delay}ms` }) as CSSProperties;

export default function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header reveal reveal-down">
        <a className="brand" href="#top" aria-label="На главную">
          <strong>Ирина Витальевна</strong>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#support">Для кого</a>
          <a href="#cases">Кейсы</a>
          <a href="#lessons">Уроки</a>
          <a href="#offer">Оферта</a>
        </nav>
        <a className="header-phone" href={phoneHref} aria-label={`Позвонить Ирине Витальевне: ${phone}`}>
          <img src={phoneImage} alt="" aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-card hero-copy reveal" style={revealStyle(90)}>
          <p className="eyebrow">Русский язык и математика для 2-4 классов</p>
          <h1 id="hero-title">
            Учеба в начальных классах <span>без стресса</span>
          </h1>
          <p className="hero-text">
            Помогаю детям спокойно разобраться с правилами, письмом, диктантами, задачами,
            примерами и домашними заданиями. Работаю бережно: сначала уверенность,
            потом устойчивый результат.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={phoneHref}>Записаться: {phone}</a>
          </div>
          <img className="decor decor-arrow reveal reveal-pop" style={revealStyle(520)} src={arrowImage} alt="" aria-hidden="true" />
        </div>
        <div className="hero-card hero-about reveal" id="about" style={revealStyle(190)}>
          <div className="portrait">
            <img src={tutorFaceImage} alt="Ирина Витальевна" />
          </div>
          <div>
            <p className="scribble">обо мне</p>
            <h2>Ирина Витальевна</h2>
            <p>
              Репетитор для младших школьников по русскому языку и математике. Объясняю простыми
              словами, замечаю пробелы и организовываю занятия так, чтобы ребенку было понятно и спокойно.
              Окончила педагогический колледж, опыт работы в сфере образования начальных классов
              более {educationExperienceYears} лет.
            </p>
          </div>
          <div className="stats-grid" aria-label="Коротко о занятиях">
            <span>2-4 классы</span>
            <span>русский + математика</span>
            <span>индивидуальный формат</span>
            <span>параллельный формат</span>
            <span>минигрупповой формат</span>
          </div>
        </div>
      </section>

      <div className="between-section" aria-hidden="true">
        <img src={betweenSectionImage} alt="" />
      </div>

      <section className="section support reveal" id="support" aria-labelledby="support-title">
        <img className="decor decor-books reveal reveal-pop" style={revealStyle(260)} src={booksImage} alt="" aria-hidden="true" />
        <div className="section-heading reveal" style={revealStyle(80)}>
          <p className="eyebrow">когда стоит прийти</p>
          <h2 id="support-title">Для кого занятия</h2>
        </div>
        <div className="support-grid">
          {supportAreas.map((area, index) => (
            <article className="support-card reveal" style={revealStyle(120 + index * 55)} key={area}>
              <span aria-hidden="true">♡</span>
              <p>{area}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cases reveal" id="cases" aria-labelledby="cases-title">
        <img className="decor decor-star reveal reveal-pop" style={revealStyle(260)} src={starImage} alt="" aria-hidden="true" />
        <div className="section-heading reveal" style={revealStyle(80)}>
          <p className="eyebrow">маленькие победы</p>
          <h2 id="cases-title">Кейсы учеников</h2>
        </div>
        <div className="case-grid">
          {studentCases.map((item, index) => (
            <article className="case-card reveal" style={revealStyle(130 + index * 75)} key={item.title}>
              <span>{item.mark}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="between-section between-section-right" aria-hidden="true">
        <img src={betweenSectionImage} alt="" />
      </div>

      <section className="section reviews reveal" aria-labelledby="reviews-title">
        <img className="decor decor-heart reveal reveal-pop" style={revealStyle(260)} src={heartImage} alt="" aria-hidden="true" />
        <div className="section-heading reveal" style={revealStyle(80)}>
          <p className="eyebrow">пока демонстрационные</p>
          <h2 id="reviews-title">Отзывы</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review, index) => (
            <blockquote className="reveal" style={revealStyle(130 + index * 75)} key={review}>{review}</blockquote>
          ))}
        </div>
      </section>

      <section className="section offer reveal" id="offer" aria-labelledby="offer-title">
        <div>
          <p className="scribble">для родителей</p>
          <h2 id="offer-title">Договор-оферта</h2>
          <p>
            Перед началом занятий вы можете спокойно ознакомиться с условиями оказания услуг.
            Договор-оферта открыт по ссылке в Google Документе: его можно прочитать онлайн
            или скачать в удобном формате.
          </p>
        </div>
        <a className="secondary-button" href={offerDocumentHref} target="_blank" rel="noreferrer">
          Открыть договор-оферту
        </a>
      </section>

      <section className="section lessons reveal" id="lessons" aria-labelledby="lessons-title">
        <div className="section-heading wide reveal" style={revealStyle(80)}>
          <p className="eyebrow">как проходит занятие</p>
          <h2 id="lessons-title">Примеры моих уроков</h2>
        </div>
        <div className="lessons-showcase">
          <div className="laptop reveal" style={revealStyle(140)} aria-label="Заглушка изображения урока на ноутбуке">
            <div className="laptop-screen">
              <div className="lesson-preview">
                <span>урок 03</span>
                <strong>Задача + правило</strong>
                <p>Читаем условие, строим схему, решаем по шагам и закрепляем важное правило.</p>
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="lesson-list">
            {lessonExamples.map((lesson, index) => (
              <article className="lesson-card reveal" style={revealStyle(170 + index * 65)} key={lesson}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{lesson}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cabinets reveal" aria-labelledby="cabinets-title">
        <img className="decor decor-plane reveal reveal-pop" style={revealStyle(260)} src={planeImage} alt="" aria-hidden="true" />
        <div className="section-heading reveal" style={revealStyle(80)}>
          <h2 id="cabinets-title">Личный кабинет ученика</h2>
        </div>
        <div className="cabinet-grid single-cabinet">
          <a className="cabinet-card reveal" style={revealStyle(130)} href={phoneHref}>
            <span>{cabinetExampleLink}</span>
            <small>материалы, задания и динамика занятий собраны в одном месте, чтобы родителям было удобно отслеживать прогресс ребенка</small>
          </a>
        </div>
      </section>

      <div className="footer-plane-layer" aria-hidden="true">
        <img className="footer-section-plane" src={sectionPlaneImage} alt="" />
      </div>

      <footer className="footer reveal" id="contacts">
        <div className="footer-board reveal" style={revealStyle(90)}>
          <p className="eyebrow">контакты</p>
          <div className="footer-title-row">
            <h2>Записаться онлайн</h2>
          </div>
          <ol className="footer-steps">
            <li className="reveal" style={revealStyle(150)}>Позвоните Ирине Витальевне</li>
            <li className="reveal" style={revealStyle(210)}>Расскажите, что вызывает сложности в русском или математике</li>
            <li className="reveal" style={revealStyle(270)}>Договоритесь о первом занятии</li>
          </ol>
        </div>
        <div className="footer-note reveal" style={revealStyle(170)} aria-label="Записка для родителей">
          <img className="decor decor-phone" src={phoneImage} alt="" aria-hidden="true" />
          <span className="scribble">для родителей</span>
          <p>Если ребенок устал от учебы, начнем мягко: найдем пробелы и уберем тревогу.</p>
          <a className="primary-button" href={phoneHref}>{phone}</a>
        </div>
        <nav className="footer-links" aria-label="Ссылки в футере">
          <a href={offerDocumentHref} target="_blank" rel="noreferrer">Оферта</a>
          <a href="#lessons">Примеры уроков</a>
          <a href="#cabinets-title">Личные кабинеты</a>
        </nav>
      </footer>
    </main>
  );
}
