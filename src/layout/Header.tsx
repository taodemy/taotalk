import Head from 'next/head';

const Header = () => {
  return (
    <div className="centre height-header padding-header box-shadow-header">
      <h1>TaoTalk</h1>
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
