import React from 'react';
import { Provider } from 'react-redux';
import Section from '../Layout/Section';
import Content from './Home';
import Footer from '../Layout/Footer';
import Store from '../Redux/Store';

class Component extends React.Component{
  render(){
    return (
      <Provider store={Store}>
        <Section/>
        <Content/>
        <Footer/>
      </Provider>
    )
  }
}

export default Component;