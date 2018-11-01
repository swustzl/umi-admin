import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { whiteList, defaultPathName } from 'utils/config';
import * as commonService from 'services/index';
import { getRole } from 'utils/user';

export default {
  namespace: 'global',
  state: {
    currPathname: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        // 每一次都回到顶部
        window.scrollTo(0, 0);
        if (document.getElementById('main')){
          document.getElementById('main').scrollTop=0;
        }
        const result = whiteList.some((reg) => {
          return reg.test(location.pathname);
        });
        dispatch({
          type: 'save',
          payload: {
            currPathname: location.pathname,
          }
        });
        if (!result && !localStorage.getItem('token')) {
          //message.error('请先登录');
          /*dispatch(routerRedux.push('/unit/unit-manage'));
          dispatch(routerRedux.push('/login'));*/
          //dispatch(routerRedux.push('/gx/home'));
        } else if (location.pathname === '/') {
          dispatch(routerRedux.push(defaultPathName[getRole()]));
        }
      });
    },
  },
  effects: {
    *externalLogin({ payload }, { call, put }) {
      const response = yield call(commonService.externalLogin, payload);
      if (response.success) {
        const data = response.data;
        localStorage.setItem('token', payload);
        localStorage.setItem('dgopUser', JSON.stringify(data));
        localStorage.setItem('unitID', data ? data.domain : '');
        yield put(routerRedux.push({
          pathname: '/',
        }));
      } else {
        message.error(response.message);
        localStorage.removeItem('token');
        localStorage.removeItem('dgopUser');
        yield put(routerRedux.push({
          pathname: '/login',
        }));
      }
    },
    *logout({ payload }, { call, put }) {
      //const data = yield call(logoutService.logout);
      let data = {
        success: true,
      };
      if (data.success) {
        const unitID = localStorage.getItem('unitID');
        localStorage.clear();
        localStorage.setItem('unitID', unitID);
        yield put(routerRedux.push({
          pathname: '/login',
        }));
        message.success('登出成功！');
      } else {
        message.error(data.message);
      }
    },
    *resetPassword({ payload }, { call, put }) {
      const data = yield call(commonService.resetPassword, payload);
      if (data.success) {
        const unitID = localStorage.getItem('unitID');
        localStorage.clear();
        localStorage.setItem('unitID', unitID);
        yield put(routerRedux.push({
          pathname: '/login',
        }));
        message.success('修改密码成功！请重新登录');
      } else {
        message.error(data.message);
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
