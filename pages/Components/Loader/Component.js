import React from 'react';
import ContentLoader from 'react-content-loader';

class Component extends React.Component{
  render(){
    const { totalArticle, loading } = this.props;
    let Loader  = [];
    
    for (let i=0; i< totalArticle;i++){
      Loader.push(
        <div key={i}>
          <ContentLoader height={30}>
            <rect x="0" y="0" rx="0" ry="0" width="10%" height="72" />
            <rect x="12%" y="2" rx="0" ry="0" width="100%" height="8" />
            <rect x="12%" y="15" rx="0" ry="0" width="100%" height="5" />
            <rect x="12%" y="22" rx="0" ry="0" width="100%" height="5" />
          </ContentLoader>
        </div>
      );
    }
    
    return (
      <div>{ loading ? <div>
        { Loader }
      </div> : [] }</div>
    );
  }
}

export default Component;