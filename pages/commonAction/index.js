import Const from './../const';

export const  loadingAction = () => {
  return { type: Const.START_LOADING };
}
  
export const doneLoadingAction= () => {
  
  return { type: Const.DONE_LOADING };
}
  
export const FailedAction = (message) => {
  return {
    type: Const.ACTION_FAILED,
    message
  };
}
export const setData = (payload) => {
  return {
    type: Const.SET_ARTICLES,
    payload
  };
}

export const setTotalArticles = (payload) => {
  return {
    type: Const.SET_TOTAL_ARTICLES,
    payload
  };
}