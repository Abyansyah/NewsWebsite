import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const RootLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
