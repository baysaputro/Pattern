import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    const { size,lineHeight, alignSelf, align, top, right, left, bold, 
      color, width, bottom, children, className } = this.props;
    
    let customeStyle = {
      fontSize:size,
      alignSelf:alignSelf,
      fontWeight:bold,
      marginTop:top,
      marginRight:right,
      marginBottom:bottom,
      marginLeft:left,
      lineHeight:lineHeight,
      textAlign:align,
      color:color,
      width:width
    };

    return (
      <div style={customeStyle} >
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
  className: PropTypes.string,
  size:PropTypes.number,
  bold:PropTypes.number,
  top:PropTypes.number,
  right:PropTypes.number,
  bottom:PropTypes.number,
  left:PropTypes.number,
  align:PropTypes.string,
  color:PropTypes.string,
  alignSelf:PropTypes.string,
  lineHeight:PropTypes.number,
  width:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};