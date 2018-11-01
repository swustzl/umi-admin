export const amapKey = '9610ad0f732c4de4d35d47781b891c40';
export const bmapKey = 'DZOcgpLG6kOcFeqGatZeW8qit5U2d5tx';
export const api = '/developer-api';

export const whiteList = [
  new RegExp('^\/login(\/[a-z0-9]{0,})?$'), // eslint-disable-line
  new RegExp('^\/sso\/?$'), // eslint-disable-line
  new RegExp('^\/gx\/[A-Za-z0-9_\-]+\/?[A-Za-z0-9_\-]*\/?[A-Za-z0-9_\-]*$'), // eslint-disable-line
  new RegExp('^\/unit\/data-analysis-view$'),
];

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

export const accessMode = {
  pull: '抽取',
  push: '推送',
  manual: '人工导入',
};

export const updateFrequency = {
  real_time: '实时',
  per_hour: '每小时',
  per_day: '每天',
  per_week: '每周',
  per_month: '每月',
  per_quarter: '每季度',
  per_year: '每年',
  others: '自定义',
};

// 面包屑名称和url
export const BreadcrumbName = {
  // '/unit': '单位管理',
  '/unit/user-manage': '用户管理',
  '/unit/reset-password': '修改密码',
  '/unit/create-user': '创建用户',
  '/unit/user-manage/reset-password': '修改密码',
  '/unit/help': '帮助',
  '/unit/operation-log': '操作日志',
  '/unit/unitInfo': '单位信息',
};

export const MenuItem = {
  // 管理员的Item
  unitAdmin: [
    {
      key: 'user-manage',
      link_url: '/unit/user-manage',
      icon_type: 'iconfont icon-peoplelist',
      menuName: '用户管理',
      children: [],
    },
  ],
  unitOperator: [
    {
      key: 'data-analysis',
      link_url: '/unit/data-analysis',
      icon_type: 'iconfont icon-home',
      menuName: '首页',
      children: [],
    },
    {
      key: 'connection-manage',
      link_url: '/unit/connection-manage',
      icon_type: 'iconfont icon-bumen',
      menuName: '连接管理',
      children: [],
    },
    {
      key: 'unit-manage',
      link_url: '/unit/unit-manage',
      icon_type: 'iconfont icon-bumen',
      menuName: '单位管理',
      children: [],
    },
    {
      key: 'associatedTable-manage',
      link_url: '/unit/associatedTable-manage',
      icon_type: 'iconfont icon-bumen',
      menuName: '数据表管理',
      children: [],
    },
    // {
    //   key: 'operation-log',
    //   link_url: '/unit/operation-log',
    //   icon_type: 'iconfont icon-caozuorizhi',
    //   menuName: '操作日志',
    //   children: [],
    // },
  ],
};

// 登陆成功后默认跳转的页面
export const defaultPathName = {
  unitAdmin: '/unit/user-manage',
  unitOperator: '/unit/data-analysis',
  demo: '/gx/home',
};

export const userRole = {
  100: 'unitAdmin',
  101: 'unitOperator',
  102: 'demo',
};

export const userRoleCN = {
  unitAdmin: '管理员',
  unitOperator: '操作员',
};
