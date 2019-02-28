import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    const { display='flex', wrap='wrap', direction, jContent='flex-start', aItems='flex-start', width, height, position , pTop, pRight, pBottom, pLeft,
      radius,left, mTop, mRight, mBottom, mLeft,
      margin, padding, bgColor, border, ShadowColor, customeClass, children } = this.props;
    
    let customeStyle = {
      display:display,
      left:left,
      flexDirection:direction,
      justifyContent:jContent,
      alignItems:aItems,
      flexWrap:wrap,
      width:width,
      height:height,
      position:position,
      margin:margin,
      marginTop:mTop,
      marginRight:mRight,
      marginBottom:mBottom,
      marginLeft:mLeft,
      paddingTop:pTop,
      paddingRight:pRight,
      paddingBottom:pBottom,
      paddingLeft:pLeft,
      padding:padding,
      backgroundColor:bgColor,
      border:`${border}px solid ${ShadowColor}`,
      borderRadius:radius
    };

    return (
      <div style={customeStyle}>
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  customeClass:PropTypes.string,
  display:PropTypes.string,
  direction:PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height:PropTypes.number,
  position:PropTypes.string,
  margin:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  mTop:PropTypes.number,
  mRight:PropTypes.number,
  mBottom:PropTypes.number,
  mLeft:PropTypes.number,
  padding:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  pTop:PropTypes.number,
  pRight:PropTypes.number,
  pBottom:PropTypes.number,
  pLeft:PropTypes.number,
  bgColor:PropTypes.string,
  border:PropTypes.number, 
  ShadowColor:PropTypes.string,
  wrap:PropTypes.string,
  jContent: PropTypes.string,
  aItems: PropTypes.string,
  radius: PropTypes.number,
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};