import { connect } from 'react-redux';
import { compose } from 'redux';
import HocWrappers from '../HocWrappers';
import Content from './Component';

const mapStateToProps=(state)=>{
  const {
    page,
    pageSize,
    totalArticle,
    dataArticles,
    status,
    loading,
  } = state.Content;
  return {
    ...state,
    page,
    pageSize,
    totalArticle,
    dataArticles,
    status,
    loading
  };
}

const mapDispatchToProps=(dispatch)=>{
  return { dispatch:dispatch };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  HocWrappers
)(Content);