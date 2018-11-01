import { routerRedux } from 'dva/router';
import queryString from 'query-string';

export default {
  namespace: 'search',
  state: {
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if(location.pathname === '/gx/search') {
          let param = queryString.parse(location.search)
          console.log(location,  param)
        }
      });
    },
  },
  effects: {
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
