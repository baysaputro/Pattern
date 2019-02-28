import React from 'react';
import './styles.css';
import ContentLoader from 'react-content-loader';

class Component extends React.Component{
  render(){
    const { totalArticle, loading } = this.props;
    let CustomeContentLoader  = [];
    
    for (let i=0; i< totalArticle;i++){
      CustomeContentLoader.push(
        <div key={i}>
          <ContentLoader height={80}>
            <rect x="0" y="0" rx="0" ry="0" width="30%" height="72" />
            <rect x="130" y="2" rx="0" ry="0" width="250" height="8" />
            <rect x="130" y="20" rx="0" ry="0" width="300" height="5" />
            <rect x="130" y="28" rx="0" ry="0" width="300" height="5" />
            <rect x="130" y="37" rx="0" ry="0" width="300" height="5" />
            <rect x="138" y="37" rx="0" ry="0" width="300" height="5" />
            <rect x="130" y="55" rx="3" ry="2" width="70" height="18" />
          </ContentLoader>
        </div>
      );
    }
    
    return (
      <div>{loading ? <div>
        {CustomeContentLoader}
      </div> : []}</div>
    );
  }
}

export default Component;