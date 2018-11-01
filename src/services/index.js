import request from 'utils/request';
import { api } from 'utils/config';

export function resetPassword({ identifier, ...values }) {
  return request({
    url: `${api}/users/${identifier}`,
    method: 'put',
    data: values,
  });
}

export function externalLogin(token) { // eslint-disable-line
  return request({
    url: `${api}/validate`,
    method: 'get',
  }, token);
}
