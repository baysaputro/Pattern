import React from 'react';
import './styles.css';
import Flex from './../component/Flex';
import Label from './../component/Label';

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
    const { dataArticles, CustomeContentLoader, loading, totalArticle, pageSize } = this.props;
    if (pageSize == totalArticle && loading){
      <CustomeContentLoader />
    }
    return (
      <div className="boxContent" ref={ref=>this.scrollArticle=ref} onScroll={this.handleScrollBoxArticle}>
        
          <Flex direction="column" width="100%">
            {dataArticles.map((article,i)=>{
              return (
                <Flex key={i} direction="row" width="100%" mRight={10} wrap={"no-wrap"} mBottom={15} border={1}>
                  <Flex direction="row" width="30%" mRight={20} height={170}>
                    <img className="imageClass" src={article.urlToImage} />
                  </Flex>
                  <Flex direction="column" width="70%" >
                    <Label size={21} bold={600} bottom={15}>
                      {article.title}
                    </Label>
                    <Label size={16} align="justify" bottom={15}>
                      {article.content}
                    </Label>
                    <button className="buttonReadMore">Read more ...</button>
                  </Flex>
                </Flex>
              )
            })}
          </Flex>
          {loading ? 
            <CustomeContentLoader />
            : []
          }
      </div>
    );
  }
}

export default Component;