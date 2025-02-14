import Image from "next/image";
import HeadComponent from "@/src/components/Head";
import Header from "@/src/components/Header";
import Button from "@/src/components/Button";
import FloatingBox from "@/src/components/FloatingBox";
import CardHIT from "@/src/components/CardHIT";
import CardAdvantages from "@/src/components/CardAdvantages";
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import Accordion, { Item } from "@/src/components/Accordion";
import Footer from "@/src/components/Footer";

import img from "@/public/img/utils";
import icons from "@/public/icons/utils";

import "@/src/app/global.scss";
import "@/src/app/page.scss";

// Данные для карточек и FAQ
const cardHITData = [
  {
    number: 1,
    title: "Знаходьте нейромережі для власних задач",
    description:
      "Lorem ipsum dolor sin amet magna consecteur aliqua nici consecteur magna consequat laborem sin dolorem consequat laborem sin dolorem.",
    imageSrc: img.hit01,
  },
  {
    number: 2,
    title: "Шукайте промпти для натхнення",
    description:
      "Lorem ipsum dolor sin amet magna consecteur aliqua nici consecteur magna consequat laborem sin dolorem consequat laborem sin dolorem.",
    imageSrc: img.hit02,
  },
  {
    number: 3,
    title: "Навчайтесь навичкам зі складання промптів",
    description:
      "Lorem ipsum dolor sin amet magna consecteur aliqua nici consecteur magna consequat laborem sin dolorem consequat laborem sin dolorem.",
    imageSrc: img.hit03,
  },
];

const cardAdvantagesData = [
  {
    number: 1,
    title: "Актуальність",
    description:
      "Ми постійно оновлюємо бібліотеку, додаючи нові AI-інструменти та найкращі промпти для різних задач.",
    imageSrc: img.adv01,
  },
  {
    number: 2,
    title: "Зручність Пошуку",
    description:
      "Знаходьте нейромережі, промпти та гайди за секунди завдяки зручній категоризації та розумному фільтру.",
    imageSrc: img.adv02,
  },
  {
    number: 3,
    title: "Інтерактивне Навчання",
    description:
      "Опануйте мистецтво промптінгу: від базових принципів до тонкої оптимізації для конкретних AI-моделей.",
    imageSrc: img.adv03,
  },
];

const Data: Item[] = [
  {
    question: "Які нейромережі підтримує сервіс?",
    answer:
      "Наш сервіс інтегрує провідні моделі штучного інтелекту, такі як GPT, BERT, DALL-E та інші сучасні рішення для різних сфер застосування.",
  },
  {
    question: "Скільки це буде коштувати?",
    answer:
      "На початкових етапах сервіс надається безкоштовно, що дозволяє вам випробувати його можливості без додаткових витрат.",
  },
  {
    question: "Чим сервіс відрізняється від інших аналогів?",
    answer:
      "Наш сервіс вирізняється інтелектуальним підбором нейромереж, який допомагає швидко знайти оптимальне рішення для вашої задачі, а також надає детальні рекомендації та аналітику.",
  },
  {
    question: "Як швидко почати користуватися сервісом?",
    answer:
      "Реєстрація та налаштування займають лише кілька хвилин, після чого ви можете одразу скористатися всіма основними можливостями платформи.",
  },
  {
    question: "Яка технічна підтримка доступна користувачам?",
    answer:
      "Наша команда завжди готова надати оперативну підтримку, відповісти на ваші запитання та допомогти у вирішенні будь-яких технічних питань.",
  },
];

export default function Home() {
  return (
    <div className='hero'>
      <HeadComponent
        pageTitle='AiGo — перша українська бібліотека нейромереж'
        pageDescription='AiGo — перша в Україні бібліотека нейромереж, що допомагає швидко знайти, порівняти й обрати найкращі AI-рішення для бізнесу чи творчості. Приєднуйтеся, щоб відкрити можливості штучного інтелекту вже сьогодні!'
      />
      <section className='main-container'>
        <Header />
        <main className='main'>
          <section className='container hero-section'>
            <div className='info'>
              <h1 className='main-title'>
                Опануйте мистецтво запитів для сучасних нейромереж
              </h1>
              <h3 className='description'>
                Lorem ipsum dolor sin amet magna consecteur aliqua nici
                consecteur magna consequat laborem sin dolorem consequat laborem
                sin dolorem.
              </h3>
              <Button>
                Почати зараз
                <Image src={icons.open} alt='arrow' width={24} height={24} />
              </Button>
            </div>
            <div className='img-box'>
              <Image src={img.hero01} alt='hero' priority />
            </div>
          </section>

          <section className='container about-us' id='about-us'>
            <div className='info'>
              <h2 className='title blue-500'>Про проєкт</h2>
              <h3 className='description'>
                Наша мета — відкриття нових можливостей ефективного промптінгу.
                Знаходьте необхідні сервіси, ідеї для промптів та опановуйте
                навичкам складання запитів разом із
                <span className='blue-500'> AI.GO</span>
              </h3>
            </div>
            <FloatingBox />
          </section>

          <section className='hit-section' id='how-it-works'>
            <div className='container'>
              <h2 className='title'>Як це працює</h2>
              <div className='card-container'>
                {cardHITData.map((card) => (
                  <CardHIT
                    key={card.number}
                    number={card.number}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageSrc}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className='advantages-section' id='advantages'>
            <div className='container'>
              <h2 className='title'>
                Переваги платформи <span className='blue-500'>AI.GO</span>
              </h2>
              <div className='cards-container'>
                {cardAdvantagesData.map((card) => (
                  <CardAdvantages
                    key={card.number}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageSrc}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className='cta-section'>
            <div className='container'>
              <div className='info'>
                <h2 className='title'>
                  Знаходьте нові нейромережі та промпти в один клік!
                </h2>
                <h3 className='description'>
                  Lorem ipsum dolor sin amet magna consecteur aliqua nici
                  consecteur magna consequat laborem sin dolorem consequat
                  laborem sin dolorem.
                </h3>
              </div>
              <Button className='secondary'>
                Підписатись на оновлення
                <Image
                  src={icons.openDark}
                  alt='arrow'
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          </section>

          <section className='faq-section' id='faq'>
            <div className='container'>
              <div className='info'>
                <h2 className='title'>Найчастіші запитання</h2>
              </div>
              <Accordion items={Data} />
            </div>
          </section>
        </main>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
