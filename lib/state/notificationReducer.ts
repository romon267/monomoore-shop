import { Reducer } from 'redux';

const notificationReducer: Reducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return {
        type: action.data.type,
        message: action.data.message,
      };
    case 'REMOVE_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

let timeOutId: NodeJS.Timeout;

// any because i'm getting trapped in cyclical dependancy issue that i can't resolve now
export const flashNotification = (
  type: string, message: string, time = 5,
) => async (dispatch: any): Promise<void> => {
  if (timeOutId) {
    console.log('id found');
    clearTimeout(timeOutId);
  }
  dispatch({
    type: 'SET_NOTIFICATION',
    data: {
      type,
      message,
    },
  });
  console.log('dispatched');
  timeOutId = setTimeout(() => {
    dispatch({
      type: 'REMOVE_NOTIFICATION',
    });
    console.log('removed');
  }, time * 1000);
};

export default notificationReducer;
