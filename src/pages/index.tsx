import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import SearchBar from "~/components/SearchBar";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
        <Header/>
      <main className="">
        <SearchBar/>
      </main>
    </>
  );
};

export default Home;
