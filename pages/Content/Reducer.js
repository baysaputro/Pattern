import Const  from './../const';

export default function Reducer(state = {
  page:1,
  pageSize:5,
  totalArticle:5,
  dataArticles:[],
  loading:false
},action) {
  switch (action.type) {
    case `${Const.START_LOADING}`:
      return {...state, loading: true};
      break;
    case `${Const.DONE_LOADING}`:
      return {...state, loading: false};
      break;
    case `${Const.SET_ARTICLES}`:
      return {...state, dataArticles: action.payload};
      break;
    case `${Const.SET_TOTAL_ARTICLES}`:
      return {...state, totalArticle: action.payload};
      break;
    default:
      return state;
  }
}
