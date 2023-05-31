import Head from 'next/head';

const Header = () => {
  return (
    <div className="centre height-88 padding-y-24 padding-x-370 box-shadow-header">
      TaoTalk
      <Head>
        <title>TaoTalk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TaoTalk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Header;
