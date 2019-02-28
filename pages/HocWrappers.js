import React from 'react';
import './styles.css';
import CustomeContentLoader from './CustomeContentLoader';

import {
  loadingAction,
  doneLoadingAction,
  setData, 
  setTotalArticles
} from './commonAction';
import "isomorphic-fetch";

const HocWrappers = (ChildComponent) =>{
  class Component extends React.Component{
    _loadDataArticle = async (page=1,totalArticle=5)=> {
      let { dispatch, dataArticles, pageSize } = this.props;
      dispatch(loadingAction());
      dispatch(setTotalArticles(totalArticle))
      let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b';
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
      const data = await res.json();
      if (totalArticle > pageSize){
        dataArticles=[...dataArticles,...data.articles];
      }else {
        dataArticles=data.articles;
      }
      dispatch(setData(dataArticles));
      dispatch(doneLoadingAction());
    }

    _renderContentLoader(){
      return (
        <CustomeContentLoader />
      );
    }

    render(){
      return (
        <ChildComponent 
          {...this.props}
          loadDataArticle ={this._loadDataArticle}
          CustomeContentLoader = {this._renderContentLoader.bind(this)}
        />
      );
    }
  }
  return Component;
}

export default HocWrappers;