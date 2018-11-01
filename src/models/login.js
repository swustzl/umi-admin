import { routerRedux } from 'dva/router';
import { message } from 'antd';
//import * as loginService from '../../services/login';

const saveUser = (data, remberMe) => {
  // localStorage.clear();
  localStorage.setItem('remberMe', remberMe);
  localStorage.setItem('token', data.token);
  localStorage.setItem('dgopUser', JSON.stringify(data.user));
};

const saveUnit = (data) => {
  localStorage.setItem('unitID', data.user ? data.user.domain : '');
};

export default {
  namespace: 'login',
  state: {
    copywriting: {},
    remberMe: false,
  },
  effects: {
    *userLogin({ payload }, { call, put }) {
      if(payload.name === 'admin' && payload.password === 'admin') {
        saveUser({user: { name: 'admin', role: 102 }}, true);
        yield put(routerRedux.push({
          pathname: '/',
        }));
      } else if (payload.name === 'admin' && payload.password !== 'admin') {
        message.error('用户名密码错误');
      } else {
        message.error('该用户不存在，请联系相关建设单位');
      }

      /*const response = yield call(loginService.login, payload);
      if (response.success) {
        const data = response.data;
        saveUser(data, true);
        yield put(routerRedux.push({
          pathname: '/',
        }));
      } else {
        message.error(response.message);
      }*/
    },
    *copywriting({ payload }, { call, put }) {
      const copywriting = JSON.parse(sessionStorage.getItem('copywriting'));
      if (!copywriting) {
        const response = {}//yield call(loginService.copywriting, payload);
        if (response.success) {
          const data = response.data;
          sessionStorage.setItem('copywriting', JSON.stringify(data));
          if (data.product_name) {
            document.getElementById('index__title').innerHTML = data.product_name;
          }
          yield put({
            type: 'save',
            payload: {
              copywriting: data,
            },
          });
        } else {
          message.error(response.message);
        }
      } else if (copywriting.product_name) {
        document.getElementById('index__title').innerHTML = copywriting.product_name;
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
