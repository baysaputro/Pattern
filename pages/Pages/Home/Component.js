import React from 'react'
import Status from '../../Components/Connection'
import Flex from '../../Elements/Flex'
import Label from '../../Elements/Label'
import '../../Assets/Css/bulma.css'
import { noConnection } from '../../Redux/Action';

class Component extends React.Component{
  constructor(props){
    super(props);
    this.scrollArticle = new React.createRef();
    this.handleScrollBoxArticle=this.handleScrollBoxArticle.bind(this);
    this.page = this.props.page;
    this.state = {
      offline: false
    }
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
    const { loadDataArticle, page, totalArticle, errorStatus }  = this.props;
    window.addEventListener('scroll', this.handleScrollBoxArticle);
    if(navigator.onLine){
      console.log('online')
      loadDataArticle(page,totalArticle);
    } else {
      console.log('offline')
      this.setState({offline:true})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollBoxArticle);
  }
  
  render(){
    let offlineMsg = this.state.offline ? (<Status />) : (<span></span>)
    const { dataArticles, Loader, loading, totalArticle, pageSize, status } = this.props;
    console.log('status')
    console.log(dataArticles)
    console.log(this.props.status)
    
    return (
      <div className="container" ref={ref=>this.scrollArticle=ref} onScroll={this.handleScrollBoxArticle}>
      {offlineMsg}
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