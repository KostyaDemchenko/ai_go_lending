import HeadComponent from "@/src/components/Head";
// import Header from "@/src/components/Header";
// import Footer from "@/src/components/Footer";

import "@/src/app/global.scss";

export default function Home() {
  return (
    <div className='hero'>
      <HeadComponent
        pageTitle='AiGo — перша українська бібліотека нейромереж'
        pageDescription='AiGo — перша в Україні бібліотека нейромереж, що допомагає швидко знайти, порівняти й обрати найкращі AI-рішення для бізнесу чи творчості. Приєднуйтеся, щоб відкрити можливості штучного інтелекту вже сьогодні!'
      />
      {/* <section className='main-container'>
        <Header />
        <main className='hero-main'></main>
        <Footer />
      </section> */}
    </div>
  );
}
