// components/HeadComponent.tsx
import Head from "next/head";

interface HeadProps {
  pageTitle: string;
  pageDescription: string;
  pageImage?: string;
  pageUrl?: string;
}

const HeadComponent: React.FC<HeadProps> = ({
  pageTitle,
  pageDescription,
  pageImage = "/img/page_image_prev.png",
  pageUrl = process.env.PUBLIC_LAND_URL,
}) => {
  return (
    <Head>
      {/* Основные метатеги */}
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <link rel='canonical' href={pageUrl} />

      {/* Open Graph метатеги */}
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={pageImage} />
      <meta property='og:url' content={pageUrl} />
      <meta property='og:type' content='website' />

      {/* Twitter Cards метатеги */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:image' content={pageImage} />

      {/* Favicon */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadComponent;
