import React from 'react';
import Pages from '../../Pages';
import "isomorphic-fetch";

function News({ dataArticles, status }) {
  return <div> <Pages status={status} dataArticles={dataArticles} /> </div>
}

// Page.getInitialProps = async ({ req }) => {
//   let inet = CheckInternetConnection()
//   console.log(inet)
//   let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b',
//   page       = 1, 
//   pageSize   = 5;
//   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
//   const data = await res.json()
//   console.log(data)
//   return { dataArticles: data.articles }
// }

News.getInitialProps = async ({ req }) => {
  let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b',
  page       = 1,
  status     = false,
  pageSize   = 5;
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`)
  console.log(status)
  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText)
    }
    return response;
  }).then(function(response){
    status=false;
    return response;
  }).catch(function(error){
    status=true;
  });
  if(status){
    console.log(status)
    return { dataArticles: [] }
  } else {
    const data = await res.json();
    return { dataArticles: data.articles }
  }
}

// Page.getInitialProps = async ({ req }) => {
//   console.log(!navigator);
//   if (!navigator){
//     return { dataArticles:[] }
    
//   }else{
//     if(navigator.onLine){
//       console.log('online');
//       let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b',
//       page       = 1, 
//       pageSize   = 5;
//       const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
//       const data = await res.json()
//       return { dataArticles: data.articles }
//     } else {
//       console.log('offline')
//     }
//   }
// }

export default News;