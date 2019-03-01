import CONST  from '../../Base/Constant';

export default function Reducer(state = {
  page:1,
  pageSize:5,
  totalArticle:5,
  dataArticles:[],
  loading:false
},action) {
  switch (action.type) {
    case `${CONST.START_LOADING}`:
      return {...state, loading: true};
      break;
    case `${CONST.DONE_LOADING}`:
      return {...state, loading: false};
      break;
    case `${CONST.SET_ARTICLES}`:
      return {...state, dataArticles: action.payload};
      break;
    case `${CONST.SET_TOTAL_ARTICLES}`:
      return {...state, totalArticle: action.payload};
      break;
    default:
      return state;
  }
}
