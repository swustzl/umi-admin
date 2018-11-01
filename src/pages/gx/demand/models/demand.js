import { routerRedux } from 'dva/router';


export default {
  namespace: 'demand',
  state: {
    data: [
      {
        id: '1',
        title: '车辆信息资源库',
        status: 'wait', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '2',
        title: '车辆信息资源库',
        status: 'complete', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '3',
        title: '车辆信息资源库',
        status: 'reject', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '4',
        title: '车辆信息资源库',
        status: 'wait', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '5',
        title: '车辆信息资源库',
        status: 'wait', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '6',
        title: '车辆信息资源库',
        status: 'complete', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '7',
        title: '车辆信息资源库',
        status: 'wait', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '8',
        title: '车辆信息资源库',
        status: 'wait', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '9',
        title: '车辆信息资源库',
        status: 'reject', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
      {
        id: '10',
        title: '车辆信息资源库',
        status: 'complete', // wait, complete, reject
        acceptUnit: '南宁市车管所',
        source: '自治区交通厅',
        dataUsed: '用于开展关于人口信息方面的这样的那样的信息数据的业务。',
        dataDescription: '关于人口信息方面的这样的那样的信息数据东西。',
        updateTime: '2018-07-04',
        messageLength: 23,
      },
    ],
  },
  effects: {
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
