import Image from "next/image";
import HeadComponent from "@/src/components/Head";
import Header from "@/src/components/Header";
import Button from "@/src/components/Button";

// import Footer from "@/src/components/Footer";

import img from "@/public/img/utils";
import icons from "@/public/icons/utils";

import "@/src/app/global.scss";
import "@/src/app/page.scss";

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
              <Image src={img.hero01} alt='hero' />
            </div>
          </section>
          <section className='cta-section'>
            <div className='container'>
              <div className='info'>
                <h2 className='title'>
                  Знаходьте нові нейромережі та промпти в один клік!{" "}
                </h2>
                <h3 className='description'>
                  Lorem ipsum dolor sin amet magna consecteur aliqua nici
                  consecteur magna consequat laborem sin dolorem consequat
                  laborem sin dolorem.{" "}
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
    </div>
  );
}
