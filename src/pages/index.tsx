import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TaoTalk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TaoTalk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Learning and teaching online, made easy.</h1>
      </section>
      <section>
        <h2>Learn a language in a playful way</h2>
      </section>
      <section>
        <h2>Increase your vocabulary</h2>
      </section>
      <section>
        <h2>Watch your progress everyday</h2>
      </section>
    </>
  );
}
