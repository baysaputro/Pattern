import React from 'react';
import './styles.css';
import Link from 'next/link';
import Router from 'next/router';

class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active:1
    }
  }
  _handleChangeMenu(menu,id=''){
    const { loadDataArticle } = this.props;
    console.log(this.props);
    let { active } = this.state;
    Router.push({ pathname :menu});
    loadDataArticle(1,5);
    // console.log(window);
    // location.reload();
    active = id=="terbaru" ? 1 : id=="populer" ? 2 : 1; 
    this.setState({ active });
  } 

  render(){
    const { active } = this.state;

    return (
      <div className="container">
        <div className="boxMenu">    
          <div className={active ==1 ? "menuItemsActive" : "menuItems" }>
            <div onClick={()=>this._handleChangeMenu("/home","terbaru")} className="boxMenuItems">
              <a className="linkClass">Berita Terbaru</a>
            </div>
          </div>
          <div  className={active ==2 ? "menuItemsActive" : "menuItems" }>
            <div onClick={()=>this._handleChangeMenu("/home","populer")} className="boxMenuItems">
              <a className="linkClass">Berita Populer</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Component;