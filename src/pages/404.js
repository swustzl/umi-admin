import React from 'react';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import Exception from 'components/antd/Exception';

export default () => (
  <Exception
    type="404"
    linkElement={Link}
    desc={formatMessage({ id: 'app.exception.description.404' })}
    backText={'回到首页'}
  />
);
