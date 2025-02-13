import Image from "next/image";
import HeadComponent from "@/src/components/Head";
import Header from "@/src/components/Header";
import Button from "@/src/components/Button";
import FloatingBox from "@/src/components/FloatingBox";
import Card from "@/src/components/Card";
import ScrollToTopButton from "@/src/components/ScrollToTopButton";

import img from "@/public/img/utils";
import icons from "@/public/icons/utils";

import "@/src/app/global.scss";
import "@/src/app/page.scss";

// Данные для карточек
const cardData = [
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
      "Lorem ipsum dolor sin amet magna consecteur aliqua nici consecteur magna consequat laborem sin dolorem consequat laborem sin dolorem. ",
    imageSrc: img.hit02,
  },
  {
    number: 3,
    title: "Навчайтесь навичкам зі складання промптів",
    description:
      "Lorem ipsum dolor sin amet magna consecteur aliqua nici consecteur magna consequat laborem sin dolorem consequat laborem sin dolorem. ",
    imageSrc: img.hit03,
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
              <div className='info'>
                <h2 className='title'>Як це працює</h2>
              </div>
              <div className='card-container'>
                {cardData.map((card) => (
                  <Card
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
        </main>
      </section>
      <ScrollToTopButton />
    </div>
  );
}
