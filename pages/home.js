import React from 'react';
import { Provider } from 'react-redux';
import './styles.css';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';
import Store from './redux/Store';

class Component extends React.Component{
  render(){
    return (
      <Provider store={Store}>
        <Menu/>
        <Content/>
        <Footer/>
      </Provider>
    )
  }
}

export default Component;