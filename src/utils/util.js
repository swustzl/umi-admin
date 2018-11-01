import { cloneDeep } from 'lodash';
import uuid from 'uuid';

export const compare = (property) => {
  return (a, b) => {
    const value1 = a[property];
    const value2 = b[property];
    return value1 - value2;
  };
};

export const readFile = (file, options) => {
  const defaultOptions = Object.assign({}, options);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader);
    };
    reader.onerror = reject;

    if (defaultOptions.accept && !new RegExp(defaultOptions.accept).test(file.type)) {
      reject({
        code: 1,
        msg: 'wrong file type',
      });
    }
    reader.readAsDataURL(file);
    // if (!file.type || /^text\//i.test(file.type)) {
    //   reader.readAsText(file);
    // } else {
    //   reader.readAsDataURL(file);
    // }
  });
};

export const mapStateToProps = (name) => {
  return (state) => {
    return {
      loading: state.loading,
      [name]: state[name],
      location: state.routing.locationBeforeTransitions,
    };
  };
};

export const pngImg = (base64Str) => {
  return `data:image/png;base64,${base64Str}`;
};

// 对象深合并, 以obj1为基准，把obj2的属性替换obj1里的属性， 参数名字为${replace}的直接替换
export const deepMerge = (source = {}, target = {}, replace = []) => {
  let key;
  for (key in target) {
    if (replace && replace.includes(key)) { // 直接替换
      source[key] = target[key];
    } else if (source[key] && source[key].toString() === '[object Object]') {
      deepMerge(source[key], target[key], replace);  // source[key]存在，且是对象的话再去调用deepMerge
    } else {
        // eslint-disable-next-line no-param-reassign
      source[key] = target[key]; // source[key]不存在或不是一个对象，可以直接与obj2[key]合并
    }
  }
  return source;
};

export const handleField = (data, keys) => {
  let cloneData = cloneDeep(data);
  if (keys) {
    for (const key of keys) {
      const cloneDataValue = cloneData[key];
      if (cloneDataValue === 0) {
        return 0;
      }
      if (cloneDataValue === false) {
        return false;
      }
      if (!cloneDataValue) {
        return cloneDataValue;
      }
      cloneData = cloneDataValue;
    }
  }
  return cloneData;
};

export const handleMaxDate = (maxDate) => {
  if (!maxDate) {
    return maxDate;
  }
  const date = new Date(maxDate);
  date.setDate(date.getDate() + 1);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const UUID = () => {
  return String(uuid()).replace(/-/g, '');
};
