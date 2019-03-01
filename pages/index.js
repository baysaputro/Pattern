import React from 'react';
import Pages from './Pages';
import "isomorphic-fetch";
import { Fetch } from  './Redux/Action';

function Page({ dataArticles }) {
  return <div>
    <Pages dataArticles={dataArticles}/>
  </div>
}
Page.getInitialProps = async ({ req }) => {
  let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b',
  page       = 1, 
  pageSize   = 5;
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
  const data = await res.json()
  return { dataArticles: data.articles }
}

export default Page;