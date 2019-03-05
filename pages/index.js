import React from 'react';
import News from './Services/API/news';
import "isomorphic-fetch";
import { Fetch } from  './Redux/Action';
import CheckInternetConnection from './Utitlities/Helper/DetectConnection'

function Page({ dataArticles }) {
  return <News dataArticles={dataArticles} />
}

export default Page;