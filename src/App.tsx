import { useEffect, useState, type CSSProperties } from 'react';
import arrowImage from './assets/images/optimized/tutor-arrow.webp';
import betweenSectionImage from './assets/images/optimized/betwenSection.webp';
import booksImage from './assets/images/optimized/tutor-books.webp';
import heartImage from './assets/images/optimized/tutor-heart.webp';
import phoneImage from './assets/images/optimized/tutor-phone.webp';
import planeImage from './assets/images/optimized/tutor-plane.webp';
import sectionPlaneImage from './assets/images/optimized/section-plane.webp';
import starImage from './assets/images/optimized/tutor-star.webp';

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryItem = {
  title: string;
  images: GalleryImage[];
};

type GalleryCategory = {
  id: string;
  title: string;
  emptyText: string;
  items: GalleryItem[];
};

const studentCaseCategories: GalleryCategory[] = [
  {
    id: 'vpr',
    title: 'ВПР',
    emptyText: 'Кейсы по подготовке к ВПР скоро появятся.',
    items: [
      {
        title: 'Маша и Софья',
        images: [
          { src: '/gallery/student-cases/masha.jpg', alt: 'Кейс ученицы Маши' },
          { src: '/gallery/student-cases/sofia.png', alt: 'Кейс ученицы Софьи' },
        ],
      },
    ],
  },
  {
    id: 'main-subjects',
    title: 'Основные предметы',
    emptyText: 'Кейсы по повышению успеваемости по основным предметам скоро появятся.',
    items: [
      {
        title: 'Аделина и Платон',
        images: [
          { src: '/gallery/student-cases/adelina.jpg', alt: 'Кейс ученицы Аделины' },
          { src: '/gallery/student-cases/platon.jpg', alt: 'Кейс ученика Платона' },
        ],
      },
    ],
  },
  {
    id: 'math-progress',
    title: 'Математика',
    emptyText: 'Здесь появятся кейсы по повышению успеваемости по математике.',
    items: [],
  },
  {
    id: 'russian-progress',
    title: 'Русский язык',
    emptyText: 'Здесь появятся кейсы по повышению успеваемости по русскому языку.',
    items: [],
  },
  {
    id: 'handwriting',
    title: 'Коррекция почерка',
    emptyText: 'Кейсы по коррекции почерка пока готовятся.',
    items: [],
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

const multiplicationMaterials: Array<GalleryImage & { title: string; caption: string }> = [
  {
    src: '/multiplication/diplom.jpg',
    alt: 'Сертификат Ирины Витальевны по программе «Таблица умножения за 12 занятий»',
    title: 'Диплом',
    caption: 'Подготовка по специальной программе',
  },
  {
    src: '/multiplication/how.jpg',
    alt: 'Примеры игровых уроков по таблице умножения с мнемотехникой',
    title: 'Примеры уроков',
    caption: 'Образы, истории и задания вместо зубрёжки',
  },
  {
    src: '/multiplication/cases.png',
    alt: 'Результаты учеников после курса по таблице умножения',
    title: 'Кейсы учеников',
    caption: 'Заметный результат к итоговому тестированию',
  },
];

const reviewImages: GalleryImage[] = [
  { src: '/gallery/parent-reviews/review-01.jpg', alt: 'Отзыв родителя 1' },
  { src: '/gallery/parent-reviews/review-02.jpg', alt: 'Отзыв родителя 2' },
  { src: '/gallery/parent-reviews/review-03.jpg', alt: 'Отзыв родителя 3' },
  { src: '/gallery/parent-reviews/review-04.jpg', alt: 'Отзыв родителя 4' },
  { src: '/gallery/parent-reviews/review-05.jpg', alt: 'Отзыв родителя 5' },
  { src: '/gallery/parent-reviews/review-06.jpg', alt: 'Отзыв родителя 6' },
  { src: '/gallery/parent-reviews/review-07.jpg', alt: 'Отзыв родителя 7' },
  { src: '/gallery/parent-reviews/review-08.jpg', alt: 'Отзыв родителя 8' },
  { src: '/gallery/parent-reviews/review-09.jpg', alt: 'Отзыв родителя 9' },
  { src: '/gallery/parent-reviews/review-10.jpg', alt: 'Отзыв родителя 10' },
  { src: '/gallery/parent-reviews/review-11.jpg', alt: 'Отзыв родителя 11' },
  { src: '/gallery/parent-reviews/review-12.jpg', alt: 'Отзыв родителя 12' },
  { src: '/gallery/parent-reviews/review-21.jpg', alt: 'Отзыв родителя 13' },
  { src: '/gallery/parent-reviews/review-22.jpg', alt: 'Отзыв родителя 14' },
  { src: '/gallery/parent-reviews/review-23.jpg', alt: 'Отзыв родителя 15' },
];

const lessonCategories: GalleryCategory[] = [
  {
    id: 'math',
    title: 'Математика',
    emptyText: 'Примеры уроков по математике скоро появятся.',
    items: [
      {
        title: 'Математика',
        images: [
          {
            src: '/gallery/lesson-examples/math-sofia-grade-4.png',
            alt: 'Пример урока по математике с Софьей',
          },
          {
            src: '/gallery/lesson-examples/math-pair-grade-3.jpg',
            alt: 'Пример парного занятия по математике',
          },
        ],
      },
    ],
  },
  {
    id: 'russian',
    title: 'Русский язык',
    emptyText: 'Примеры уроков по русскому языку скоро появятся.',
    items: [
      {
        title: 'Русский язык',
        images: [
          {
            src: '/gallery/lesson-examples/russian-dasha-grade-3.png',
            alt: 'Пример урока по русскому языку с Дашей',
          },
          {
            src: '/gallery/lesson-examples/russian-semen-grade-2.png',
            alt: 'Пример урока по русскому языку с Семеном',
          },
        ],
      },
    ],
  },
  {
    id: 'handwriting',
    title: 'Коррекция почерка',
    emptyText: 'Примеры уроков по коррекции почерка пока готовятся.',
    items: [],
  },
  {
    id: 'templates',
    title: 'Шаблоны',
    emptyText: 'Шаблоны уроков скоро появятся.',
    items: [
      {
        title: 'Шаблоны уроков',
        images: [
          { src: '/gallery/lesson-examples/template-01.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-02.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-03.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-04.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-05.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-06.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-07.jpg', alt: 'Шаблон урока' },
          { src: '/gallery/lesson-examples/template-08.jpg', alt: 'Шаблон урока' },
        ],
      },
    ],
  },
];

const educationExperienceStartYear = 2021;
const educationExperienceYears = new Date().getFullYear() - educationExperienceStartYear;
const cabinetExampleHref = 'http://buildin.ai/share/d9e2aebb-7dfd-475c-87ee-dda5e80911c4?code=M6K3QH';
const phone = '89803781258';
const phoneHref = `tel:${phone}`;
const offerDocumentHref = 'http://buildin.ai/share/d9e2aebb-7dfd-475c-87ee-dda5e80911c4?code=M6K3QH';
const offerDocumentName = 'ДОГОВОР-ОФЕРТА ДЛЯ ВСЕХ 09 05 2026 как на сайте.docx';

const revealStyle = (delay: number) => ({ '--reveal-delay': `${delay}ms` }) as CSSProperties;

export default function App() {
  const [activeCaseCategory, setActiveCaseCategory] = useState(studentCaseCategories[0].id);
  const [activeLessonCategory, setActiveLessonCategory] = useState(lessonCategories[0].id);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalCloseVisible, setIsModalCloseVisible] = useState(false);
  const [isModalImageZoomed, setIsModalImageZoomed] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const currentCaseCategory =
    studentCaseCategories.find((category) => category.id === activeCaseCategory) ?? studentCaseCategories[0];
  const currentLessonCategory =
    lessonCategories.find((category) => category.id === activeLessonCategory) ?? lessonCategories[0];
  const currentReview = reviewImages[reviewIndex];

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);

    if (!sectionId) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

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

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedImage]);

  const showPreviousReview = () => {
    setReviewIndex((current) => (current === 0 ? reviewImages.length - 1 : current - 1));
  };

  const showNextReview = () => {
    setReviewIndex((current) => (current === reviewImages.length - 1 ? 0 : current + 1));
  };

  const openImage = (image: GalleryImage) => {
    setIsModalCloseVisible(false);
    setIsModalImageZoomed(false);
    setSelectedImage(image);
  };

  const renderTabs = (
    categories: GalleryCategory[],
    activeCategory: string,
    onSelectCategory: (category: string) => void,
    ariaLabel: string,
  ) => (
    <div className="gallery-tabs" role="tablist" aria-label={ariaLabel}>
      {categories.map((category) => (
        <button
          className={category.id === activeCategory ? 'gallery-tab is-active' : 'gallery-tab'}
          type="button"
          role="tab"
          aria-selected={category.id === activeCategory}
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );

  const renderGallery = (category: GalleryCategory, emptyLabel: string) => {
    if (category.items.length === 0) {
      return (
        <div className="gallery-empty" role="status">
          <p>{category.emptyText}</p>
        </div>
      );
    }

    return (
      <div className="gallery-grid">
        {category.items.map((item) => (
          <article className="gallery-card" key={item.title}>
            <h3>{item.title}</h3>
            <div className="photo-grid">
              {item.images.map((image) => (
                <button
                  className="photo-button"
                  type="button"
                  key={image.src}
                  onClick={() => openImage(image)}
                  aria-label={`${emptyLabel}: открыть изображение`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <main>
      <header className="site-header reveal reveal-down">
        <a className="brand" href="#top" aria-label="На главную">
          <strong>Ирина Витальевна</strong>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#support">Для кого</a>
          <a href="#multiplication">12 уроков</a>
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
            <img src="/multiplication/hero.jpg" alt="Ирина Витальевна" />
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
            <span>парный формат</span>
            <span>мини-групповой формат</span>
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

      <section
        className="section multiplication reveal"
        id="multiplication"
        aria-labelledby="multiplication-title"
      >
        <div className="multiplication-intro">
          <div className="section-heading wide reveal" style={revealStyle(80)}>
            <p className="eyebrow">специальная программа</p>
            <h2 id="multiplication-title">
              Таблица умножения <span>за 12 уроков</span>
            </h2>
          </div>
          <div className="multiplication-copy reveal" style={revealStyle(130)}>
            <p>
              Всего за 12 занятий ваш ребёнок легко и без зубрёжки запомнит таблицу
              умножения. Секрет — в мнемотехнике: каждый сложный пример оживает через
              образ, короткий стишок или забавную историю. В комплекте — рабочие листы
              для домашней отработки и дополнительные материалы для закрепления.
              Вместо скучного заучивания — яркие сюжеты и понятные ассоциации.
              Результат виден уже через несколько уроков!
            </p>
            <div className="multiplication-tags" aria-label="Особенности программы">
              <span>без зубрёжки</span>
              <span>мнемотехника</span>
              <span>рабочие листы</span>
            </div>
          </div>
        </div>
        <div className="multiplication-gallery">
          {multiplicationMaterials.map((material, index) => (
            <article
              className="multiplication-card reveal"
              style={revealStyle(170 + index * 70)}
              key={material.src}
            >
              <button
                className="multiplication-photo"
                type="button"
                onClick={() => openImage(material)}
                aria-label={`${material.title}: открыть изображение`}
              >
                <img src={material.src} alt={material.alt} loading="lazy" />
              </button>
              <div>
                <h3>{material.title}</h3>
                <p>{material.caption}</p>
              </div>
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
        {renderTabs(studentCaseCategories, activeCaseCategory, setActiveCaseCategory, 'Категории кейсов учеников')}
        {renderGallery(currentCaseCategory, 'Кейс ученика')}
      </section>

      <div className="between-section between-section-right" aria-hidden="true">
        <img src={betweenSectionImage} alt="" />
      </div>

      <section className="section reviews reveal" aria-labelledby="reviews-title">
        <img className="decor decor-heart reveal reveal-pop" style={revealStyle(260)} src={heartImage} alt="" aria-hidden="true" />
        <div className="section-heading reveal" style={revealStyle(80)}>
          <p className="eyebrow">мнение родителей</p>
          <h2 id="reviews-title">Отзывы</h2>
        </div>
        <div className="reviews-carousel reveal" style={revealStyle(130)}>
          <button className="carousel-button" type="button" onClick={showPreviousReview} aria-label="Предыдущий отзыв">
            ‹
          </button>
          <button
            className="review-photo"
            type="button"
            onClick={() => openImage(currentReview)}
            aria-label="Открыть отзыв"
          >
            <img src={currentReview.src} alt={currentReview.alt} loading="lazy" />
          </button>
          <button className="carousel-button" type="button" onClick={showNextReview} aria-label="Следующий отзыв">
            ›
          </button>
          <div className="review-dots" aria-label="Выбор отзыва">
            {reviewImages.map((review, index) => (
              <button
                type="button"
                className={index === reviewIndex ? 'review-dot is-active' : 'review-dot'}
                key={review.src}
                onClick={() => setReviewIndex(index)}
                aria-label={`Показать отзыв ${index + 1}`}
              />
            ))}
          </div>
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
        <a className="secondary-button" href={offerDocumentHref} download={offerDocumentName}>
          Скачать договор-оферту
        </a>
      </section>

      <section className="section lessons reveal" id="lessons" aria-labelledby="lessons-title">
        <div className="section-heading wide reveal" style={revealStyle(80)}>
          <p className="eyebrow">как проходит занятие</p>
          <h2 id="lessons-title">Примеры моих уроков</h2>
        </div>
        {renderTabs(lessonCategories, activeLessonCategory, setActiveLessonCategory, 'Категории примеров уроков')}
        <div className="lessons-showcase">
          {renderGallery(currentLessonCategory, 'Пример урока')}
        </div>
      </section>

      <section className="section cabinets reveal" aria-labelledby="cabinets-title">
        <img className="decor decor-plane reveal reveal-pop" style={revealStyle(260)} src={planeImage} alt="" aria-hidden="true" />
        <div className="section-heading reveal" style={revealStyle(80)}>
          <h2 id="cabinets-title">Личный кабинет ученика</h2>
        </div>
        <div className="cabinet-grid single-cabinet">
          <a className="cabinet-card reveal" style={revealStyle(130)} href={cabinetExampleHref} target="_blank" rel="noopener noreferrer">
            <span>Нажми на меня</span>
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
          <a href={offerDocumentHref} download={offerDocumentName}>Оферта</a>
          <a href="#multiplication">Таблица умножения</a>
          <a href="#lessons">Примеры уроков</a>
          <a href="#cabinets-title">Личные кабинеты</a>
        </nav>
      </footer>
      <div className="developer-credit">
        <a href="https://project42-studio.ru/" target="_blank" rel="noopener noreferrer">
          сайт разработан project 42
        </a>
      </div>
      {selectedImage && (
        <div
          className={`image-modal${isModalImageZoomed ? ' is-image-zoomed' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенное изображение"
        >
          <button className="image-modal-backdrop" type="button" onClick={() => setSelectedImage(null)} aria-label="Закрыть" />
          <div className={`image-modal-content${isModalCloseVisible ? ' is-close-visible' : ''}`}>
            <button className="image-modal-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Закрыть">
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={() => setIsModalCloseVisible((isVisible) => !isVisible)}
            />
          </div>
          <button
            className="image-modal-zoom"
            type="button"
            aria-label={isModalImageZoomed ? 'Уменьшить изображение' : 'Увеличить изображение'}
            aria-pressed={isModalImageZoomed}
            onClick={() => setIsModalImageZoomed((isZoomed) => !isZoomed)}
          >
            {isModalImageZoomed ? '−' : '+'}
          </button>
        </div>
      )}
    </main>
  );
}
