import CONST from '../../Base/Constant';

export const  loadingAction = () => {
  return { type: CONST.START_LOADING };
}
  
export const doneLoadingAction= () => {
  
  return { type: CONST.DONE_LOADING };
}
  
export const FailedAction = (message) => {
  return {
    type: CONST.ACTION_FAILED,
    message
  };
}
export const setData = (payload) => {
  return {
    type: CONST.SET_ARTICLES,
    payload
  };
}

export const setTotalArticles = (payload) => {
  return {
    type: CONST.SET_TOTAL_ARTICLES,
    payload
  };
}