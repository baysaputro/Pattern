import { connect } from 'react-redux';
import CustomerContentLoader from './Component';

const mapStateToProps=(state)=>{
  const {
    page,
    pageSize,
    totalArticle,
    dataArticles,
    loading,
  } = state.Content;
  return {
    ...state,
    page,
    pageSize,
    totalArticle,
    dataArticles,
    loading
  };
}

const mapDispatchToProps=(dispatch)=>{
  return { dispatch:dispatch };
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerContentLoader);