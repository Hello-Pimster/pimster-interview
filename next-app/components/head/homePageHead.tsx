import Head from "next/head";

const HomePageHead = () => {
  return (
    <Head>
      <title>Space X Launches Gallery</title>
      <meta
        name="description"
        content="A collection of all Space X launches to explore"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HomePageHead;
