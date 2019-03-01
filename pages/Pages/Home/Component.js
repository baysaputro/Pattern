import React from 'react';
import Flex from '../../Elements/Flex';
import Label from '../../Elements/Label';
import '../../Assets/Css/bulma.css'

class Component extends React.Component{
  constructor(props){
    super(props);
    this.scrollArticle = new React.createRef();
    this.handleScrollBoxArticle=this.handleScrollBoxArticle.bind(this);
    this.page = this.props.page;
  }

  handleScrollBoxArticle(){
   const { dataArticles, loadDataArticle, pageSize, loading } = this.props;
   if (dataArticles!=null){
    if ((window.scrollY + window.innerHeight>=document.body.offsetHeight) && dataArticles.length && !loading){
      this.page++;
      let totalArticle=this.page*pageSize;
      loadDataArticle(this.page,totalArticle);
    }
   }
  }

  componentDidMount() {
    const { loadDataArticle, page, totalArticle }  = this.props;
    loadDataArticle(page,totalArticle);
    window.addEventListener('scroll', this.handleScrollBoxArticle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollBoxArticle);
  }
  
  render(){
    const { dataArticles, Loader, loading, totalArticle, pageSize } = this.props;
    if (pageSize == totalArticle && loading){
      <Loader />
    }
    return (
      <div className="container" ref={ref=>this.scrollArticle=ref} onScroll={this.handleScrollBoxArticle}>
      {dataArticles.map((article,i)=>{
        return(
          <article className="media" key={i}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={article.urlToImage} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{article.title}</strong>
                  <br />{article.description}<br />
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-reply"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-heart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="media-right">
              <button className="delete"></button>
            </div>
          </article>
        )
        })}
      { loading ? <Loader /> : [] }
      </div>
    );
  }
}

export default Component;